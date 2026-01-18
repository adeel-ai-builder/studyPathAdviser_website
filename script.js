function getPath() {
    let level = document.getElementById("level").value;
    let interest = document.getElementById("interest").value;
    let result = document.getElementById("result");
    let selection = document.getElementById("selection-section");

    if (level === "" || interest === "") {
        alert("Please select both level and field");
        return;
    }

    // Hide selection card
    selection.classList.add("hide");

    // Show result after animation
    setTimeout(() => {
        selection.style.display = "none";
        result.style.display = "block";
        document.body.style.alignItems = "flex-start";
    }, 500);

    let output = `<h3>Recommended Study Path</h3><ul class="study-list">`;

    const addItem = (title, link) => {
        output += `
        <li class="study-item">
            <span>${title}</span>
            <a href="${link}" target="_blank">
                <button class="view-btn">View</button>
            </a>
        </li>`;
    };

    if (interest === "ai") {
        addItem("Python Programming", "https://www.w3schools.com/python/");
        addItem("NumPy & Pandas", "https://www.w3schools.com/python/numpy_intro.asp");
        addItem("Machine Learning Basics", "https://www.youtube.com/watch?v=Gv9_4yMHFhI");
        addItem("Jupyter Notebook", "https://jupyter.org/");
    } else if (interest === "web") {
        addItem("HTML & CSS", "https://www.w3schools.com/html/");
        addItem("JavaScript", "https://www.w3schools.com/js/");
        addItem("Bootstrap", "https://www.w3schools.com/bootstrap/");
        addItem("Backend Basics", "https://www.youtube.com/watch?v=Oe421EPjeBE");
    } else if (interest === "data") {
        addItem("Python for Data Science", "https://www.w3schools.com/python/");
        addItem("Statistics Basics", "https://www.youtube.com/watch?v=xxpc-HPKN28");
        addItem("Data Visualization", "https://www.w3schools.com/python/matplotlib_intro.asp");
    } else if (interest === "os") {
        addItem("Process Management", "https://www.geeksforgeeks.org/process-management-in-operating-system/");
        addItem("Threads", "https://www.geeksforgeeks.org/thread-in-operating-system/");
        addItem("Memory Management", "https://www.geeksforgeeks.org/memory-management-in-operating-system/");
    }

    output += "</ul>";
    result.innerHTML = output;
}
