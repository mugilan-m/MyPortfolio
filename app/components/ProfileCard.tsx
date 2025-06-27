import React from "react";
import Image from "next/image";
function ProfileCard() {
  return (
    <div className="profile-card">
      <Image src="/Mugilan.png" alt="Profile Picture" className="profile-image"
        width={150}
        height={150}
       />

      <div className="content-area">
        <div className="name-container">
          <span className="text-2xl font-semibold">Mugilan M 👋</span>
        </div>

        <p className="description">
          A Passionate <strong>Full Stack Developer</strong> 💻 &{" "}
          <strong>UI Designer</strong> having <strong>3 years</strong> of
          Experiences in <strong>Ecommerce website development services</strong>
          .
        </p>

        <div className="button-container ml-[-20px] w-[42vh]">
          <button className="book-call-button  ">
            <div className="mr-1">
              <svg
                className="icon"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 4H9.5L11.5 9L9 10.5C10.071 12.6715 11.8285 14.429 14 15.5L15.5 13L20.5 15V19C20.5 19.5304 20.2893 20.0391 19.9142 20.4142C19.5391 20.7893 19.0304 21 18.5 21C14.5993 20.763 10.9202 19.1065 8.15683 16.3432C5.3935 13.5798 3.73705 9.90074 3.5 6C3.5 5.46957 3.71071 4.96086 4.08579 4.58579C4.46086 4.21071 4.96957 4 5.5 4Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15.5 7C16.0304 7 16.5391 7.21071 16.9142 7.58579C17.2893 7.96086 17.5 8.46957 17.5 9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15.5 3C17.0913 3 18.6174 3.63214 19.7426 4.75736C20.8679 5.88258 21.5 7.4087 21.5 9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            Book A call
          </button>
          <button className="copy-email-button  ">
            <Image
              src="https://www.svgrepo.com/show/533682/download.svg"
              className="w-7 h-6 mr-2"
              alt="download resume "
              width={24}    
              height={24} 
            />
            Download CV
          </button>
        </div>
        <div className="flex flex-row gap-10 mt-4 w-[42vh] ">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <Image src="https://www.svgrepo.com/show/521711/instagram.svg" 
            width={24}
            height={24}
            alt="Instagram Icon"
            />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <Image src="https://www.svgrepo.com/show/503338/facebook.svg"
            width={24}
            height={24}
            alt="Facebook Icon"
            />
          </a>
          <a href="" className="text-blue-500 hover:text-blue-700">
            <Image src="https://www.svgrepo.com/show/506517/linkedin.svg"
            width={24}
            height={24}
            alt="LinkedIn Icon"
            />
          </a>
          <a href="" className="text-blue-500 hover:text-blue-700">
            <Image src="https://www.svgrepo.com/show/512317/github-142.svg" 
            width={24}
            height={24}
            alt="GitHub Icon"
            />
          </a>
          <a href="" className="text-blue-500 hover:text-blue-700">
            <Image src="https://www.svgrepo.com/show/513089/youtube-168.svg"
            width={24}
            height={24}
            alt="YouTube Icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
