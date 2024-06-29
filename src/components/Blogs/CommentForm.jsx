"use client";
import { SuccessToast } from "@/utils/FormHelper";
import client_api from "@/utils/api_fetch_fun";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { VscSend } from "react-icons/vsc";

const CommentForm = ({ blogId }) => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.userName.value;
    const email = e.target.email.value;
    const comment = e.target.message.value;
    const img = e.target.img.value;
    client_api
      .create("/api/public-api/comments", { name, email, comment, blogId, img })
      .then((res) => {
        if (res.status) {
          e.target.reset();
          SuccessToast("comment sent successfully");
          router.refresh();
        }else{
          toast.error("SomeThing went wrong!")
        }
      });
  };
  return (
    <div className="leave-comment">
      <h4>Leave A Comment</h4>
      <div className="comment-box">
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <input name="userName" type="text" placeholder="Enter Your Name" required/>
          </div>
          <div className="inputs">
            <input name="email" type="email" placeholder="Enter Your Email" required/>
          </div>
          <div className="inputs">
            <input name="img" type="text" placeholder="Enter Your IMAGE CDN." />
          </div>
          <div className="inputs">
            <textarea name="message" placeholder="Message" required></textarea>
          </div>
          <div>
            <button className="button button--flex">
              Post Comment
              <VscSend className="button__icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
