import React from "react";
import "./Add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Project</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">AI ML </option>
              <option value="music">Web 3 and Blockchain</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              placeholder="Brief descriptions to introduce the project you are working on the world"
              cols="0"
              rows="16"
            ></textarea>
            <button>Create</button>
          </div>
          <div className="details">
            <label htmlFor="">Tech Stack used</label>
            <textarea
              name=""
              id=""
              placeholder="Short description of your tech stack"
              cols="30"
              rows="10"
            ></textarea>

            <label htmlFor="date">Potential Team Size</label>
            <input type="number" />
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="e.g. page design" />
            <input type="text" placeholder="e.g. file uploading" />
            <input type="text" placeholder="e.g. setting up a domain" />
            <input type="text" placeholder="e.g. hosting" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
