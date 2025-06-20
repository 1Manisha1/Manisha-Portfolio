import React from "react";
import Card from "../components/Card";

const About = () => {
  return (
    <section id="about" className="pt-24 px-4 max-w-4xl mx-auto">
      <Card title="About Me">
        <p>
          I'm Manisha Pandey from Mohali, Punjab, originally from Nepal. I'm currently pursuing B.E. in Computer Science and Engineering at Chandigarh University.
        </p>
        <p className="mt-2">
          I'm passionate about software development and data engineering, with a strong interest in solving real-world problems using Python, Django, and machine learning.
        </p>
      </Card>
    </section>
  );
};

export default About;
