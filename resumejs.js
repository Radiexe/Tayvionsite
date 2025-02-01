const resumeContent = `
Tayvion Settles
IT Operations Coordinator


SUMMARY
Aspiring IT professional with a bachelor's degree in Information Technology from Eastern Michigan University. Reliable and dependable team member with experience in system administration, IT support, and troubleshooting.

EXPERIENCE

IT Coordinator
Career Now Brands - Royal Oak, MI
December 2023 - Present
- Managed DNS records in AWS.
- Administrator for multiple workplace accounts.
- Worked with Google Workspace and Office 365.
- Troubleshot company computers and handled MDM enrollment.
- Deployed scripts and software installations.

User Support Specialist
Eastern Michigan University - Ypsilanti, MI
August 2022 - December 2023
- Installed and configured software for university systems.
- Provided technical support for students and faculty.
- Troubleshot computer hardware and software issues.
- Assisted users with problem-solving and IT inquiries.

Meat Clerk
Kroger - Roseville, MI
July 2018 - May 2024
- Provided customer service and assisted with food preparation.
- Ensured proper food safety and handling procedures.
- Worked collaboratively in a team-oriented environment.

Cashier
Chick-fil-A Restaurants - Ypsilanti, MI
August 2021 - May 2022
- Handled cash transactions and payments.
- Delivered high-quality customer service in a fast-paced setting.

EDUCATION

Bachelor of Science in Information Technology
Eastern Michigan University - Ypsilanti, MI
Graduated August 2024

SKILLS
- IT Support & Troubleshooting
- System Administration
- Network Management
- Google Workspace & Office 365
- MDM Enrollment
- DNS & Cloud Services (AWS)
- Scripting & Automation


Total Experience: 3 years in IT Operations and Support
`
;

document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector('.typing-animation');
    let index = 0;

    function typeResume() {
        if (index < resumeContent.length) {
            typingElement.textContent += resumeContent.charAt(index);
            index++;

            // Auto-scroll to bottom as text appears
            typingElement.scrollIntoView({ behavior: "smooth", block: "end" });

            setTimeout(typeResume, 10); // Typing speed
        }
    }

    typeResume();
});
