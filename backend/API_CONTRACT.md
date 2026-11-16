# API CONTRACT

## GET /pages
Route: GET /api/pages
Purpose: Retrieve all available pages in Storio.
Request body: None.

Success Response (200 OK):
    {
        "success": true,
        "data": [
            {
                "id": 1,
                "title": "Home",
                "url": "/Home.html",
                "description": "Starting page of Storio."
            },
            {
                "id": 2,
                "title": "Tutorial",
                "url": "/Tutorial.html",
                "description": "Navigation tutorial."
            },
            {
                "id": 3,
                "title": "Alice in Wonderland",
                "url": "/AliceInWonderland.html",
                "description": "Alice's adventures in Wonderland."
            }
        ]
    }

Error Response (500 Internal Server Error):
    {
        "success": false,
        "error": "Unable to retrieve pages."
    }

## POST /pages
Route: POST /api/pages
Purpose: Creates a new page to Storio.

Data Params:
    {
        "title": string,
        "url": /title.html,
        "description": "string description of the page."
    }

Success Response (201 Created):
    {
        "success": true,
        "data": {
        "id": integer,
        "title": string,
        "url": /title.html,
        "description": "string description of the page"
        }
    }

Error Response (400 Bad Request):
    {
        "success": false,
        "error": "Title, URL, and description are required."
    }

## PUT /pages
Route: PUT /api/pages/:id
Purpose: Update an existing page using its ID.

Request body:
    {
        "title": string,
        "url": "/title.html",
        "description": "string description of the page"
    }

Success Response (200 OK):
    {
        "success": true,
        "data": {
        "id": 3,
        "title": "Alice in Wonderland - Chapter 1",
        "url": "/AliceInWonderland.html",
        "description": "The beginning of Alice's adventure."
        }
    }

Error Responses:

400 Bad Request:
    {
        "success": false,
        "error": "Invalid page information."
    }

404 Not Found:
    {
        "success": false,
        "error": "Page not found."
    }

## DELETE /pages
Route: DELETE /api/pages/:id
Purpose: Remove a page using its ID.
Request body: None.

Success Response (200 OK):
    {
        "success": true,
        "message": "Page deleted successfully."
    }

Error Response (404 Not Found):
    {
        "success": false,
        "error": "Page not found."
    }
