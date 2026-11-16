import express from "express";

const app = express();
app.use(express.json());   // reads JSON request bodies; we need it from Lab 3B on

// In memory: no database. Change the names and fields to your own resource later.
const pages = [
    { 
        id: 1, 
        title: "Home",
        url: "/Home.html",
        description: "Starting page of Storio",
    },
    { 
        id: 2,
        title: "About",
        url: "/About.html",
        description: "Navigation tutorial.",
    },
    { 
        id: 3,
        title: "Alice in Wonderland",
        url: "/AliceInWonderland.html",
        description: "Alice's adventures in Wonderland."
    }
];

// --------------------------------
// Next ID for new pages.
// --------------------------------
let nextId = 4; 

// --------------------------------
// GET: LIST ALL PAGES 
// --------------------------------
app.get("/api/pages", (req, res) => {
    try {
        // SUCCESS
        res.status(200).json({
            success: true,
            data: pages
        });
    } catch (error) {
        // FAILURE, CAN'T RETRIEVE PAGES
        res.status(500).json({
            success: false,
            error: "Unable to retrieve pages."
        });
    }
});

// --------------------------------
// GET: ONE PAGE BY ID
// --------------------------------
app.get("/api/pages/:id", (req, res) => {
  const page = pages.find(p => p.id === Number(req.params.id));
  const id = Number(req.params.id);


  /*
  !!!!! Need to reflect this in API Contract !!!!!
  */

  // FAILURE, INVALID PAGE ID IF PAGE ID IS NOT A POSITIVE INTEGER
    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json({
            success: false,
            error: "Invalid page ID."
        });
    }

    // FAILURE, PAGE NOT FOUND IF PAGE ID IS NOT IN THE PAGES ARRAY
    if (!page) {
        return res.status(404).json({
        success: false,
        error: "Page not found."
    });
    }

  // SUCCESS
  res.status(200).json({
        success: true,
        data: page
    });
});

// --------------------------------
// POST: CREATE A NEW PAGE
// --------------------------------
app.post("/api/pages", (req, res) => {
    const { title, url, description } = req.body || {};

    // FAILURE: Check that all required fields are present and contain non-empty strings.
    if (
        typeof title !== "string" || !title.trim() ||
        typeof url !== "string" || !url.trim() ||
        typeof description !== "string" || !description.trim()
    ) {
        return res.status(400).json({
            success: false,
            error: "Title, URL, and description are required."
        });
    }

    // SUCCESS
    const newPage = {
        id: nextId++,
        title: title.trim(),
        url: url.trim(),
        description: description.trim()
    };

    pages.push(newPage);

    res.status(201).json({
        success: true,
        data: newPage
    });
});

// --------------------------------
// PUT: UPDATE AN EXISTING PAGE
// --------------------------------
app.put("/api/pages/:id", (req, res) => {
    const id = Number(req.params.id);
    const page = pages.find(p => p.id === id);

    // FAILURE, INVALID PAGE ID IF PAGE ID IS NOT A POSITIVE INTEGER
    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json({
            success: false,
            error: "Invalid page ID."
        });
    }

    // FAILURE, PAGE DOES NOT EXIST
    if (!page) {
        return res.status(404).json({
            success: false,
            error: "Page not found."
        });
    }
    
    // FAILURE, INVALID PAGE INFORMATION
    const { title, url, description } = req.body || {};
    if (
        typeof title !== "string" || !title.trim() ||
        typeof url !== "string" || !url.trim() ||
        typeof description !== "string" || !description.trim()
    ) {
        return res.status(400).json({
            success: false,
            error: "Invalid page information."
        });
    }

    // SUCCESS
    page.title = title.trim();
    page.url = url.trim();
    page.description = description.trim();

    res.status(200).json({
        success: true,
        data: page
    });
});

// --------------------------------
// DELETE: DELETE AN EXISTING PAGE
// --------------------------------
app.delete("/api/pages/:id", (req, res) => {
    const id = Number(req.params.id);
    const pageIndex = pages.findIndex(p => p.id === id);
    
    // FAILURE, INVALID PAGE ID IF PAGE ID IS NOT A POSITIVE INTEGER
    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json({
            success: false,
            error: "Invalid page ID."
        });
    }

    // FAILURE, PAGE DOES NOT EXIST
    if (pageIndex === -1) {
        return res.status(404).json({
            success: false,
            error: "Page not found."
        });
    }

    // SUCCESS
    pages.splice(pageIndex, 1);

    res.status(204).json({
        success: true,
        message: "Page deleted successfully."
    });
});



export default app;