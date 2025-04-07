import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  cards = [
    {
      img : 'https://djgeqya1wekbj.cloudfront.net/product-images/600-600/HTML-1200x600Test-1.jpg.webp',
      title: 'HTML Course',
      subtitle: 'Learn the fundamentals of HTML including tags, attributes, and semantic markup.',
      count: 'View',
      tasks: [
        { name: 'Number of Students Joined', percent: 59 },
        { name: 'Course Fees', percent: 11000 },
        { name: 'Course Duration Period', percent: '6Months' },
        { name: 'Course Status', percent: 'Active' }
      ]
    },
    {
      title: 'CSS Course',
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-JydnvQvGNBxuUyxSPcRwPcI2n9pF55OOQ&s',
      subtitle: 'Learn the fundamentals of HTML including tags, attributes, and semantic markup.',
      count: 'View',
      tasks: [
        { name: 'Number of Students Joined', percent: 59 },
        { name: 'Course Fees', percent: 11 },
        { name: 'Course Duration Period', percent: '6Months' },
        { name: 'Document Send Pending', percent: 7 }
      ]
    },
    {
      title: 'JAVA Course',
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZpZ7mD8K9lHpi0aRaMjkggITsd_Lqe4tgw&s',
      subtitle: 'Learn the fundamentals of HTML including tags, attributes, and semantic markup.',
      count: 'View',
      tasks: [
        { name: 'Number of Students Joined', percent: 59 },
        { name: 'Course Fees', percent: 11 },
        { name: 'Course Duration Period', percent: '6Months' },
        { name: 'Document Send Pending', percent: 7 }
      ]
    },
    {
      title: 'JAVA SCRIPT Course',
      img : 'https://www.classcentral.com/report/wp-content/uploads/2017/10/js-and-frameworks-banner.png',
      subtitle: 'Learn the fundamentals of HTML including tags, attributes, and semantic markup.',
      count: 'View',
      tasks: [
        { name: 'Number of Students Joined', percent: 59 },
        { name: 'Course Fees', percent: 11 },
        { name: 'Course Duration Period', percent: '6Months' },
        { name: 'Document Send Pending', percent: 7 }
      ]
    },
    {
      title: 'ANGULAR Course',
      img : 'https://jupitervidya.com/wp-content/uploads/2018/03/Angular-Training-in-Bangalore.jpg',
      subtitle: 'Learn the fundamentals of HTML including tags, attributes, and semantic markup.',
      count: 'View',
      tasks: [
        { name: 'Number of Students Joined', percent: 59 },
        { name: 'Course Fees', percent: 11 },
        { name: 'Course Duration Period', percent: '6Months' },
        { name: 'Document Send Pending', percent: 7 }
      ]
    },
    {
      title: 'REACT Course',
      img : 'https://media.licdn.com/dms/image/v2/D4D12AQF5LKYv_4CoYw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1695497781676?e=2147483647&v=beta&t=aSGqvPXSceClfW8UfA3jzQVjHg4_JRxb5UW9Fbc0cOQ',
      subtitle: 'Learn the fundamentals of HTML including tags, attributes, and semantic markup.',
      count: 'View',
      tasks: [
        { name: 'Number of Students Joined', percent: 59 },
        { name: 'Course Fees', percent: 11 },
        { name: 'Course Duration Period', percent: '6Months' },
        { name: 'Document Send Pending', percent: 7 }
      ]
    },
    {
      title: 'FLUTTER Course',
      img : 'https://onlyflutter.com/wp-content/uploads/2024/03/flutter_banner_onlyflutter.png',
      subtitle: 'Learn the fundamentals of HTML including tags, attributes, and semantic markup.',
      count: 'View',
      tasks: [
        { name: 'Number of Students Joined', percent: 59 },
        { name: 'Course Fees', percent: 11 },
        { name: 'Course Duration Period', percent: '6Months' },
        { name: 'Document Send Pending', percent: 7 }
      ]
    },
    {
      title: 'JAVA Course',
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZpZ7mD8K9lHpi0aRaMjkggITsd_Lqe4tgw&s',
      subtitle: 'Learn the fundamentals of HTML including tags, attributes, and semantic markup.',
      count: 'View',
      tasks: [
        { name: 'Number of Students Joined', percent: 59 },
        { name: 'Course Fees', percent: 11 },
        { name: 'Course Duration Period', percent: '6Months' },
        { name: 'Document Send Pending', percent: 7 }
      ]
    },
    // Add other cards similarly
  ];
  
}
