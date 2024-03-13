import "./BlogDetails.css"

const BlogDetails = () => {
  const singleblog = {
    id: 1,
    title: "Insights Of Exploring Technology",
    img: "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/inner-pages/blog-dt-01.png",
    author: {
      img: "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/inner-pages/blog-sidebar-3.png",
      name: "Cooper Jogan",
    },
    date: "Jan 05, 2021",
    desc1:
      "Suspendisse bibendum efficitur orci, a pretium erat mattis nec. Vestibulum antema ypsumi primis inaetahsjanoti faucibus orci luctus etenjot ultrices posuere cubilia andt Interdum et malesuada fames ac ante ipsum primis in faucibus.Etiam eu nibh elementum, accumsan ona neque ac, aliquet nunc.In eu ipsum fringilla, accumsan purus vel, pellentesque risus.Vivamus vehicula nl purus at eros interdum, in dignissim nulla vestibulum.Nunc sit amet finibus felis, ut egestas lacus.Sedan pellentesque quis magna eu vestibulum.Ut sed commodo neque.Morbi erat nisi, vehicula quis faucibus il aliquet nunc.In eu ipsum fringilla, accumsan purus vel, pellentesque risus.Vivamus vehicula noted by thi ut, hendrerit vel tortor.In pharetra lectus luctus ornare sollicitudin.",
    highlight: {
      desc: "I work with Alguneb Johnl on many projects, he always beeni toldagona exci my expectations with his quality work and fastestopa tope service, very smooth and simple.",
      name: "Leslie Alexander",
    },
    title2: "Our Begin Now To Beingonl",
    desc2:
      "urna Aenean onewaryzo eleifend vitae tellus a facilisis. Nunc posuere at augue eget onem porta. Inei odio goral tubeleti tellus, dignissim fermentumara purus nec, consequat dapibus toura gonem metus.Vivamus urna worlda mauris, faucibus at egestas quis, fermentum egetonav nequet Duis pharetra lectus nec risusonl pellentesque, toi vitae aliquet nisi dapibus. Sed volutpat mot velit, ateng maximus est eleifend accui Fusce porttitor ex archunabo. dignissim fermentumara purus nec, consequat dapibus toura gonem metus.Vivamus urna worlda Phasellus one viverra lorem ant nibh placerat tincidunt.bolgotai Aliquam andit rutrum.",
    title3: "Arcu At Mauris Facilisis Fermentum",
    desc3:
      "urna Aenean onewaryzo eleifend vitae tellus a facilisis. Nunc posuere at augue eget portat Inei odio tellus, dignissim fermentumara purus nec, consequat dapibus metus.Vivamus one urna worlda mauris, faucibus at egestas quis, fermentum egetonav neque.",
    comments: [
      {
        id: 1,
        author: {
          name: "Polard Girdet",
          profile:
            "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/inner-pages/comment-img-01.png",
        },
        date: "Jan 2, 2021",
        comment:
          "Odio tellus, dignissim fermentumara purus nec, consequat dapibus metus.Vivamusut urna world classo mauris, faucibus at egestas quis, fermentum egetonav neque. Duisonajt pharetra lectus nec risusonota and we are always support our customer support available.",
      },
      {
        id: 2,
        author: {
          name: "Andrew Watson",
          profile:
            "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/inner-pages/comment-img-02.png",
        },
        date: "Jan 10, 2021",
        comment:
          "Odio tellus, dignissim fermentumara purus nec, consequat dapibus metus.Vivamusut urna world classo mauris, faucibus at egestas quis, fermentum egetonav neque. Duisonajt pharetra lectus nec risusonota and we are always support our customer support available.",
      },
    ],
  };

  return (
    <div className="">
      <div className="singleBlog cus_container">
        <div className="single-blog-content">
          <div className="px-5">
            <img src={singleblog.img} alt="web developer" className="object-cover max-h-[300px] md:max-h-[400px]" />
            <h3>{singleblog.title}</h3>
            <ul>
              <li>
                <img src={singleblog.author.img} alt="web developer" className="object-cover" />
                <p>
                  By,{" "}
                  <span style={{color: "var(--first-color)"}}>{singleblog.author.name}</span>
                </p>
              </li>
              <li>{singleblog.date}</li>
            </ul>
            <p className="para">{singleblog.desc1}</p>
            <div className="highlight">
              <p>{`"${singleblog.highlight.desc}"`}</p>
              <h5 style={{color: "var(--first-color)"}}>{singleblog.highlight.name}</h5>
            </div>
            <h4>{singleblog.title2}</h4>
            <p className="para">{singleblog.desc2}</p>
            <h4>{singleblog.title3}</h4>
            <p className="para">{singleblog.desc3}</p>
            <br />
            <br />
            <br />
            <br />
            <h4>
              {singleblog.comments.length}{" "}
              {singleblog.comments.length > 1 ? "Comments" : "Comment"}
            </h4>
            {singleblog.comments.map((comment, i) => (
              <div key={i} className="commentsDiv">
                <img src={comment.author.profile} alt="web developer" />
                <div className="commentDetails">
                  <h5>{comment.author.name}</h5>
                  <p className="date" style={{color: "var(--first-color)"}}>{comment.date}</p>
                  <p className="para">{comment.comment}</p>
                </div>
              </div>
            ))}

            <div className="leave-comment">
              <h4>Leave A Comment</h4>
              <div className="comment-box">
                <form>
                  <div className="inputs">
                    <input
                      name="userName"
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="inputs2">
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                    <input name="subject" type="text" placeholder="Subject" />
                  </div>
                  <div className="inputs">
                    <textarea name="message" placeholder="Message"></textarea>
                  </div>
                  <button className="btn-primary">Post Comment</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
