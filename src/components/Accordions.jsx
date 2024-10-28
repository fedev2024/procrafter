import React from "react";
import "./Accordions.css"
function Accordions() {
  return (
    <div>
      <div className="accordion lists" id="accordionExample">
        <h2>
          <b>Frequently Asked Questions</b>
        </h2>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is Resume Builder?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              A resume builder is an app or software program anyone can use to
              quickly and easily make resumes, cover letters and CVs. Many
              sites, including , offer a resume builder service to help you
              through every resume section, offering tips and guidance along the
              way. Builders automate parts of the resume-writing process using
              AI to generate text suggestions based on your work experience. For
              example, someone who worked in retail would type in their previous
              job title to get dozens of auto-generated work experience bullet
              points. They could then edit the text to make it more specific and
              showcase their unique contributions.Additionally, you can use a
              free resume builder or a premium one. With a premium builder,
              you’ll have more download options. When you finish your
              competitive resume in just a few minutes, you can download the
              resume in any file format you like.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What's unique about using online resume builder to build my
              resume?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Learning how to write a resume from scratch isn’t easy. But ’s
              resume generator makes resume building pain-free, fast and
              straightforward so anyone in any industry can build a professional
              resume in minutes. Plus, with our application tracking feature,
              you’ll know when the hiring manager looks at your resume. And, you
              won’t find our HR-approved template designs anywhere else.
              Finally, our Resume Builder is free to use, so you can get started
              on your document without adding your card.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Is this Resume builder Free?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Our Resume Maker is free to use. You can upload your resume,
              choose a template and fill out every section. But, you will need
              to sign up for a subscription to get full access, including
              premium designs, a cover letter builder and unlimited downloads in
              whichever file format you need.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordions;
