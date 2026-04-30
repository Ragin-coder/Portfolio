// ====== Data ======
const profile = {
  name: "Nate Borders",
  about: "I am a passionate gamer that just recently got into computers. I am happy to learn all that I can on how to create programs, websites, and a lot more with the experiences in the future.",
  gallery: [
    "IMG_2655.JPG",
    "IMG_2871.JPG",
  ],
  blogs: [
    // Use this format for empty or no blogs:
    { title: "I have never created a blog." }
  ],
  hobbies: ["Gaming", "Running", "Table Top Games", "Hunting"]
};

const courses = [
  {
    name: "Fundamentals of Programming",
    learned: ["Object-Oriented Programming", "Implement Algorithms", "Implement Programs"]
  },
  {
    name: "HTML & CSS Fundamentals",
    learned: ["Semantic HTML", "Flexbox", "Responsive Design"]
  },
  {
    name: "React Basics",
    learned: ["Components", "Props & State", "Hooks", "Routing"]
  },
  {
    name: "",
    learned: ["REST APIs", "Routing", "Middleware"]
  },
  {
    name: "Python 101",
    learned: ["Data Types", "Control Structures", "Functions"]
  },
  {
    name: "Database Systems",
    learned: ["MySQL", "SQL Queries", "Joins"]
  },
  {
    name: "Git & GitHub",
    learned: ["Version Control", "Branching", "Pull Requests"]
  },
  {
    name: "Introduction to Networking Network Fundamentals",
    learned: ["Building and Securing a Small Network", "IP Addressing", "Ethernet Concepts"]
  },
  {
    name: "Algorithms & Data Structures",
    learned: ["Big O", "Arrays", "Linked Lists"]
  },
  {
    name: "Typescript Introduction",
    learned: ["Types", "Interfaces", "Type Inference"]
  }
];

const projects = [
  {
    title: "Portfolio Website",
    logo: "https://picsum.photos/60?random=13",
    desc: "Personal professional website.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Ragin-coder/portfolio"
  }
];

const contact = {
  email: "Ntborders2s@semo.edu",
  phone: "", // Blank because not provided
  github: "https://github.com/Ragin-coder",
  blog: "",
  linkedIn: "https://linkedin.com/in/Nboders"
};

// ====== DOM elements ======
const navList = document.getElementById('nav-list');
const content = document.getElementById('content');

// ====== Navigation Handling ======
navList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    Array.from(navList.children).forEach(li => li.classList.remove('active'));
    e.target.classList.add('active');
    showSection(e.target.dataset.section);
  }
});

// Initial load
showSection('home');

// ====== Content Rendering Functions ======

function showSection(section) {
  content.innerHTML = ''; // clear

  if (section === 'home') renderHome();
  else if (section === 'courses') renderCourses();
  else if (section === 'projects') renderProjects();
  else if (section === 'contact') renderContact();
}

// == Home ==
function renderHome() {
  // Profile
  const profileDiv = document.createElement('div');
  profileDiv.innerHTML = `
    <h2>${profile.name}</h2>
    <p>${profile.about}</p>
    <h3>Gallery</h3>
    <div class="gallery">
      ${profile.gallery.map(url => `<img src="${url}" alt="Gallery Image">`).join('')}
    </div>
    <h3>Blogs</h3>
    <ul>
      ${profile.blogs.map(blog => blog.url && blog.title
        ? `<li><a href="${blog.url}" target="_blank">${blog.title}</a></li>`
        : "<li>I have never created a blog.</li>"
      ).join('')}
    </ul>
    <h3>Hobbies</h3>
    <ul>
      ${profile.hobbies.map(hobby => `<li>${hobby}</li>`).join('')}
    </ul>
  `;
  content.appendChild(profileDiv);
}

// == Courses ==
function renderCourses() {
  const coursesDiv = document.createElement('div');
  coursesDiv.innerHTML = '<h2>Courses</h2>';
  const ul = document.createElement('ul');

  courses.forEach(course => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${course.name}</strong>
      <ul>
        ${course.learned.map(pt => `<li>${pt}</li>`).join('')}
      </ul>`;
    ul.appendChild(li);
  });

  coursesDiv.appendChild(ul);
  content.appendChild(coursesDiv);
}

// == Projects ==
function renderProjects() {
  const projectsDiv = document.createElement('div');
  projectsDiv.innerHTML = '<h2>Projects</h2>';

  projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${proj.logo}" class="project-logo" alt="logo">
      <div class="project-desc">
        <h3>${proj.title}</h3>
        <p>${proj.desc}</p>
        <p><strong>Technologies:</strong> ${proj.tech.join(', ')}</p>
        <a href="${proj.github}" target="_blank">GitHub Repo</a>
      </div>
    `;
    projectsDiv.appendChild(card);
  });

  content.appendChild(projectsDiv);
}

// == Contact + Form ==
function renderContact() {
  const contactDiv = document.createElement('div');
  contactDiv.innerHTML = `
    <h2>Contact</h2>
    <ul>
      <li><strong>Email:</strong> <a href="mailto:${contact.email}">${contact.email}</a></li>
      <li><strong>Phone:</strong> ${contact.phone ? contact.phone : "–"}</li>
      <li><strong>GitHub:</strong> <a href="${contact.github}" target="_blank">${contact.github}</a></li>
      ${contact.blog ? `<li><strong>Blog:</strong> <a href="${contact.blog}" target="_blank">${contact.blog}</a></li>` : ""}
      <li><strong>LinkedIn:</strong> <a href="${contact.linkedIn}" target="_blank">${contact.linkedIn}</a></li>
    </ul>
    <h3>Send Me a Message</h3>
    <form id="contactForm" autocomplete="off" novalidate>
      <label for="fname">Name:</label>
      <input type="text" id="fname" name="fname" required>
      <div class="error" id="ename"></div>
      
      <label for="address">Address:</label>
      <textarea id="address" name="address" required></textarea>
      <div class="error" id="eaddress"></div>
      
      <label for="age">Age:</label>
      <input type="number" id="age" name="age" required>
      <div class="error" id="eage"></div>
      
      <button type="submit">Submit</button>
      <div id="form-message"></div>
    </form>
  `;
  content.appendChild(contactDiv);

  // Attach form handler & validation
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Validation
    let valid = true;
    const name = document.getElementById('fname').value.trim();
    const address = document.getElementById('address').value.trim();
    const age = document.getElementById('age').value.trim();

    document.getElementById('ename').textContent = '';
    document.getElementById('eaddress').textContent = '';
    document.getElementById('eage').textContent = '';
    document.getElementById('form-message').textContent = '';

    if (!name) {
      document.getElementById('ename').textContent = 'Name is required!';
      valid = false;
    } else if (name.length < 2) {
      document.getElementById('ename').textContent = 'Enter a valid name.';
      valid = false;
    }
    if (!address) {
      document.getElementById('eaddress').textContent = 'Address is required!';
      valid = false;
    }
    if (!age) {
      document.getElementById('eage').textContent = 'Age is required!';
      valid = false;
    } else if (isNaN(Number(age)) || Number(age) < 1 || Number(age) > 120) {
      document.getElementById('eage').textContent = 'Enter a valid age between 1 and 120!';
      valid = false;
    }

    if (valid) {
      document.getElementById('form-message').innerHTML =
        `<span class="success">Thank you, ${name}! Your message has been sent.</span>`;
      this.reset();
    }
  });
}
