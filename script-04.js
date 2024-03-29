function scoreToGrade(score) {
    if (score >= 90) {
        console.log("A");
    }
    else if (score >= 80) {
        console.log("B");

    }
    else if (score >= 70) {
        console.log("C");
    }
    else if (score >= 60) {
        console.log("D");
    }
    else {
        console.log("F");
    }
}

// Test case 1
scoreToGrade(50);

// Test case 2
scoreToGrade(60);

// Test case 3
scoreToGrade(75);

// Test case 4
scoreToGrade(87);

// Test case 5
scoreToGrade(90);