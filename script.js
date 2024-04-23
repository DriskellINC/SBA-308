// The provided course information. // object created CourseInfo 1st bulletpoint 
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group. 2nd bullet point
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",         //assignmentInfo 3rd bullet point
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data. 4th bullet point an array learnerSuvmission objects

const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

  return result;
}

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);

//If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid
// try/catch -check to see if its 0 - if then - let and const appropriate usage - strings, numbers, booleans, value cached with variables 


// /////////////////////////////////////////////////////////////
// function CourseInfo (id, name) {
//   if (typeof id === "number" || typeof name === "string") {
//     throw new Error
//       ("Invalid input ID must be a number, name must be a string");
//   }
// } try {
//   CourseInfo(1, "");    //""is a sting in order to catch the error
// } catch (error) {
//   console.error (error.message);       //try and catch, booleen, sting and error caught 
// }                                       //'id'=number

/**   weighted average and assignment scores for each learner is needed:
Iterate through the LearnerSubmission array and calculate the weighted average score for each learner.
Handle late submissions by deducting 10% of the total points possible for assignments submitted after the due date.
Calculate the percentage score for each assignment. */

function calWeightedAverage(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  const learnerScores = {}; 
  for ( const submission of LearnerSubmissions) {
        const learnerId = submission.learner_id
        const assignment_id = submission.assignment_id;
        const submissionData = submission.submission;

        const assignment = assignmentGroup
          .find(assignment => assignment_id === assignmentId)
        
  }
}
const weightedScore = (submissionData.score / assignment.points_possible) * assignment.group_weight;

// should go through assignments, submissions - points and possible points and weighted scores per assignment 

// I was able to console.log some results, until i tired my try and catch from 109- then started to have problems. I have requested extra help via learner support!!!