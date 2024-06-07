const courses = [
    { id: 1, name: 'JavaScript', duration: 5, description: 'To create dynamic webpages', fees: 5000 , courseImg:'https://learnbatta.com/assets/images/javascript/javascript-logo.png'},
    { id: 2, name: 'Advanced CSS ', duration: 2, description: 'CSS to design responsive webpages', fees: 3000 },
    { id: 3, name: 'Python Programming', duration: 5, description: 'Python to work with databases', fees: 2000 },
    { id: 4, name: 'HTML', duration: 3, description: 'HTML to structure webpages', fees: 4000 },
    { id: 5, name: 'Java', duration: 4, description: 'Backend and API development', fees: 4500 },
    { id: 6, name: 'MySQL', duration: 2, description: 'Work With Database and development', fees: 3500 }
];

// Load courses into the course catalog
const courseList = document.getElementById('course-list');
courses.forEach(course => {
    const courseItem = document.createElement('div');
    courseItem.className = 'card p-2';
    courseItem.innerHTML = `
       
        <h3 class="text-center">${course.name}</h3><br>
        <h5 class="text-center">Course Duration <br> <span >  ${course.duration}  Month </span></h5><br>
        <p class="text-center">${course.description}</p><br> 
        <h4 class="text-center ">Rs. ${course.fees} Only</h4>
        <button class=" main-btn" data-toggle="modal" data-target="#enrollModal"
            data-course-id="${course.id}"
            data-course-name="${course.name}"
            data-course-duration="${course.duration}"
            data-course-fees="${course.fees}">
            Enroll Now
        </button>
    `;
    courseList.appendChild(courseItem);
});


// Implement search functionality
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredCourses = courses.filter(course => course.name.toLowerCase().includes(query));
    courseList.innerHTML = '';
    filteredCourses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'card p-2';
        courseItem.innerHTML = `
       
        <h3 class="text-center">${course.name}</h3><br>
        <h5 class="text-center">Course Duration <br> <span >  ${course.duration}  Month </span></h5><br>
        <p class="text-center">${course.description}</p><br> 
        <h4 class="text-center ">Rs. ${course.fees} Only</h4>
        <button class=" main-btn" data-toggle="modal" data-target="#enrollModal"
            data-course-id="${course.id}"
            data-course-name="${course.name}"
            data-course-duration="${course.duration}"
            data-course-fees="${course.fees}">
            Enroll Now
        </button>
    `;
        courseList.appendChild(courseItem);
    });
});

// Event listener to populate modal with course details
$('#enrollModal').on('show.bs.modal', function (event) {
    const button = $(event.relatedTarget); // Button that triggered the modal
    const courseId = button.data('course-id');
    const courseName = button.data('course-name');
    const courseDuration = button.data('course-duration');
    const courseFees = button.data('course-fees');

    const modal = $(this);
    modal.find('#courseId').val(courseId);
    modal.find('#courseName').val(courseName);
    modal.find('#courseDuration').val(courseDuration + ' Months');
    modal.find('#courseFees').val('Rs. ' + courseFees);
});

// Enrollment form submission handler
const enrollmentForm = document.getElementById('enrollmentForm');
enrollmentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const courseId = document.getElementById('courseId').value;
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    alert(`Enrolled in course ID: ${courseId}\nName: ${fullName}\nEmail: ${email}\nPayment Method: ${paymentMethod}`);
});

// Discussion handler

document.getElementById('discussionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the message from the textarea
    const message = document.getElementById('discussion').value;

    // Check if the message is not empty
    if (message.trim() !== '') {
        // Create a new div element to display the message
        const newMessageDiv = document.createElement('div');
        newMessageDiv.className = 'border border-2 mt-2 col-12';
        newMessageDiv.innerHTML = `
            <div class="card-body">
                <p><strong>User:</strong> ${message}</p>
            </div>
        `;

        // Append the new message to the container
        document.getElementById('showMessageContainer').appendChild(newMessageDiv);

        // Clear the textarea
        document.getElementById('discussion').value = '';
    }
});