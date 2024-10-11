import { courseCardData, servicesData, allCourseCardData } from "./data/card.js";

const courseCard = (course) => {
    return `
                <div class="course-card card bg-light rounded-3 shadow overflow-hidden text-center border-0 mb-4">
                    <img src="${course.image}" class="course-image" alt="Course Image" />
                    <div class="card-body course-content p-3">
                        <h5 class="card-title mb-3 fw-bold">${course.title}</h5>
                        <div class="card-text">
                            <p class="mb-3">${course.instructor}</p>
                            <p class="course-description mb-3">${course.description}</p>
                        </div>
                        <div class="rating-price d-flex justify-content-between align-items-center mb-3">
                            <div class="rating text-warning">
                                <span>${course.rating}</span>
                                <span class="stars">★★★★★</span>
                            </div>
                            <div class="price fw-bold text-success">
                                <span>${course.price}</span>
                            </div>
                        </div>
                        <div class="d-grid col-6 mx-auto">
                            <a href="#" class="btn btn-primary py-2 text-white mt-3">Buy Now</a>
                        </div>
                    </div>
                </div>
            `;
}

const servicesCard = (data) => {
    return `
        <div class="col-md-4 mb-4">
            <div class="service-card text-center h-100">
                <img src="${data.icon}" alt="Video Learning" class="service-icon"/>
                <h3>${data.title}</h3>
                <p>${data.description}</p>
            </div>
        </div>
            `;
}

const allCoursesCard = (data) => {
    return `
        <div class="col">
          <div class="course-card card rounded-3 overflow-hidden text-center w-100 h-100">
            <img src="${data.image}" class="course-image" alt="Course Image" />
            <div class="card-body course-content py-3 px-4">
              <h5 class="card-title mb-3 fw-bold">
                ${data.title}
              </h5>
              <div class="card-text">
                <p class="mb-3">${data.instructor}</p>
                <p class="course-description mb-3">
                  ${data.description}
                </p>
              </div>
              <div class="rating-price d-flex justify-content-between align-items-center mb-3">
                <div class="rating text-warning">
                  <span>${data.rating}</span>
                  <span class="stars text-warning">★★★★★</span>
                </div>
                <div class="price fw-bold text-success d-flex flex-column align-items-end">
                  <span>Harga Course</span>
                  <span>${data.price}</span>
                </div>
              </div>
              <div class="d-grid col-6 mx-auto">
                <a href="#" class="btn btn-primary py-2 text-white mt-3">Beli Course Sekarang</a>
              </div>
            </div>
          </div>
        </div>
            `;
}

const generateCard = (data, card, container) => {
    data.forEach((value) => {
        container.innerHTML += card(value)
    })
}

const cardContainer = document.querySelector('.courses-container');
const servicesContainer = document.querySelector('.services-container');
const allCoursesContainer = document.querySelector('.all-courses-container');

if (cardContainer) {
    generateCard(courseCardData, courseCard, cardContainer)   
}
if (servicesContainer) {
    generateCard(servicesData, servicesCard, servicesContainer)   
}
if (allCoursesContainer) {
    generateCard(allCourseCardData, allCoursesCard, allCoursesContainer)   
}