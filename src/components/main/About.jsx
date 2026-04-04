import React from "react";
import Skill from "../Skill";
import Experience from "../Experience";
import Education from "../Education";
import Project from "../Project";
import Certification from "../Certification";

const About = () => {
  return (
    <div className="flex flex-col gap-y-6">
      {/**About Me */}
      <div className="flex flex-col gap-y-4">
        <div>
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-neutral-400">
            I'm a 3rd-year Computer Science student with a passion for building
            impactful AI-powered solutions. I bridge machine learning and
            software development to design intelligent systems that go beyond
            theory — from ideation and model training to integration and
            deployment.
          </p>
        </div>

        {/**Interests */}
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-lg">Interests</h2>
          <div className="flex flex-wrap gap-x-2 gap-y-2">
            <Skill skillType="interest" skillTitle="Artificial Intelligence" />
            <Skill skillType="interest" skillTitle="Machine Learning" />
            <Skill skillType="interest" skillTitle="NLP" />
            <Skill skillType="interest" skillTitle="Computer Vision" />
          </div>
        </div>
      </div>

      {/**Skills */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Skills</h1>

        <div className="flex flex-col gap-y-4">
          {/**Languages */}
          <div className="flex flex-col gap-y-2">
            <h2 className="font-semibold text-lg">Languages</h2>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              <Skill skillType="language" skillTitle="JavaScript" />
              <Skill skillType="language" skillTitle="TypeScript" />
              <Skill skillType="language" skillTitle="Java" />
              <Skill skillType="language" skillTitle="Python" />
            </div>
          </div>

          {/**Frameworks */}
          <div className="flex flex-col gap-y-2">
            <h2 className="font-semibold text-lg">Frameworks</h2>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              <Skill skillType="framework" skillTitle="React JS" />
              <Skill skillType="framework" skillTitle="React Native" />
              <Skill skillType="framework" skillTitle="Spring Boot" />
              <Skill skillType="framework" skillTitle="Flask" />
              <Skill skillType="framework" skillTitle="Flutter" />
              <Skill skillType="framework" skillTitle="Tailwind CSS" />
            </div>
          </div>

          {/**Backend */}
          <div className="flex flex-col gap-y-2">
            <h2 className="font-semibold text-lg">Backend</h2>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              <Skill skillType="backend" skillTitle="REST APIs" />
              <Skill skillType="backend" skillTitle="Node.js" />
            </div>
          </div>

          {/**Databases */}
          <div className="flex flex-col gap-y-2">
            <h2 className="font-semibold text-lg">Databases</h2>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              <Skill skillType="database" skillTitle="SQL" />
              <Skill skillType="database" skillTitle="MongoDB" />
            </div>
          </div>

          {/**Practices */}
          <div className="flex flex-col gap-y-2">
            <h2 className="font-semibold">Practices & Tools</h2>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              <Skill skillType="practice" skillTitle="Git" />
              <Skill skillType="practice" skillTitle="Docker" />
              <Skill skillType="practice" skillTitle="Linux" />
              <Skill skillType="practice" skillTitle="Visual Studio Code" />
            </div>
          </div>
        </div>
      </div>

      {/**Experiences */}
      {/* <div className="flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold mb-4">Experience</h1>
        <Experience
          role="CTO & Founder"
          location="Shifti, Melbourne, Victoria"
          duration="April 2023 - Present"
          contributions={[
            "Led the development of an innovative AI-powered shift scheduling platform for the employees",
            "Led the development of an innovative AI-powered shift scheduling platform for the employees",
            "Led the development of an innovative AI-powered shift scheduling platform for the employees",
            "Led the development of an innovative AI-powered shift scheduling platform for the employees",
          ]}
          skills={[
            "NextJS",
            "Supabase",
            "React Native",
            "Expo",
            "Machine Learning",
          ]}
        />
      </div> */}

      {/**Education */}
      <div className="flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold mb-4">Education</h1>
        <Education
          logo="tiplogo.png"
          degree="Bachelor of Science in Computer Science"
          location="Technological Institute of the Philippines - Quezon City"
          duration="August 2021 - Present"
        />
      </div>

      {/**Certifications */}
      <div className="flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold mb-4">Certifications</h1>
        <Certification
          addtlClass={"min-w-24 w-24"}
          logo="topcitlogo.png"
          title="Level 4 (Proficient) - 799 Points"
          description="TOPCIT (Test of Practical Competency in IT)"
          duration="December 15, 2025 - Present"
        />
     
        <Certification
          addtlClass={"min-w-24 w-24"}
          logo="oraclecloud.png"
          title="OCI 2025 Certified AI Data Science Professional"
          description="Oracle (1Z0-1110-25)"
          duration="August 28, 2025 - August 28, 2027"
        />
           <Certification
          addtlClass={"min-w-24 w-24"}
          logo="oraclecloud.png"
          title="OCI 2025 Certified AI Foundations Associate"
          description="Oracle (1Z0-1122-25)"
          duration="July 18, 2025 - July 18, 2027"
        />
      </div>

            {/**Projects */}
      <div className="flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <Project
        imgsrc={"fake_news_detector_logo.png"}
        viewCodeLink={"https://github.com/lindtseyyy/fake-news-detector-gemini-grounding.git"}
          title="Fake News Detector"
          descriptions={[
            "Built a Vertex AI–powered web app that verifies news by comparing claims with real-time sources and providing confidence scores with supporting evidence, going beyond typical binary classification.",
          ]}
          techstack={["React JS", "Flask", "Vertex AI", "Docker", 'Git']}
        />
      </div>

    </div>
  );
};

export default About;
