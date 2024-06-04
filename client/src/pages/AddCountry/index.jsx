import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import controller from "../services/api/requests";
import { endpoints } from "../services/api/constants";
import Select from "react-select";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import Blog from "../classes/Blog";
import Swal from "sweetalert2";
import blogValidation from "../validations/blog.validation";

const AddCountry = () => {
  const user = useSelector((state) => state.user);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.role != "journalist") {
      navigate("/");
    }
  }, [navigate, user]);
  useEffect(() => {
    controller.getAll(endpoints.tags).then((res) => {
      setTags(res.data);
      setTags(() => {
        const options = res.data.map((tag) => {
          return {
            value: tag._id,
            label: tag.title,
          };
        });
        return options;
      });
    });
  }, []);
  const formik = useFormik({
    initialValues: {
      title: "",
      src: "",
      description: "",
      tagIds: [],
    },
    validationSchema: blogValidation,
    onSubmit: async ({ title, description, src, tagIds }, actions) => {
      const ids = tagIds.map((tag) => {
        return tag.value;
      });
      const newBlog = new Blog(title, description, src, user.id, ids);
      await controller.post(endpoints.blogs, newBlog);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "New Blog Posted",
        showConfirmButton: false,
        timer: 1000,
      });
      actions.resetForm();
    },
  });
  return (
    <div
      style={{
        width: "40%",
        margin: "50px auto",
        borderRadius: "6px",
        padding: "15px 25px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "14px" }}>
        Add New Blog
      </h3>
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "14px" }}
      >
        <TextField
          name="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          id="outlined-basic"
          type="text"
          label="Title"
          variant="outlined"
        />
        {formik.touched.title && formik.errors.title && (
          <span style={{ color: "red" }}>{formik.errors.title}</span>
        )}
        <TextField
          name="src"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.src}
          id="outlined-basic"
          type="text"
          label="Image Source"
          variant="outlined"
        />
        {formik.touched.src && formik.errors.src && (
          <span style={{ color: "red" }}>{formik.errors.src}</span>
        )}
        <Select
          onBlur={formik.handleBlur}
          defaultValue={formik.values.tagIds}
          value={formik.values.assigned}
          onChange={(assignedTag) => {
            return formik.setFieldValue("tagIds", assignedTag);
          }}
          isMulti
          name="tagIds"
          options={tags}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        {formik.touched.tagIds && formik.errors.tagIds && (
          <span style={{ color: "red" }}>{formik.errors.tagIds}</span>
        )}
        <TextField
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          name="description"
          placeholder="Description"
          multiline
          rows={10}
          maxRows={20}
        />
        {formik.touched.description && formik.errors.description && (
          <span style={{ color: "red" }}>{formik.errors.description}</span>
        )}
        <input
          id="file"
          name="file"
          type="file"
          onChange={(event) => {
            formik.setFieldValue("file", event.currentTarget.files[0]);
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddCountry;
