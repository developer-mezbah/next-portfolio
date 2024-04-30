import parse from "html-react-parser";
import moment from "moment/moment";
import Image from "next/image";
import "./BlogDetails.css";
import CommentForm from "./CommentForm";

const BlogDetails = ({ comments, blogId, data }) => {
  // const singleblog = {
  //   id: 1,
  //   title: "Insights Of Exploring Technology",
  //   img: "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/inner-pages/blog-dt-01.png",
  //   author: {
  //     img: "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/inner-pages/blog-sidebar-3.png",
  //     name: "Cooper Jogan",
  //   },
  //   date: "Jan 05, 2021",
  //   desc1:
  //     "Suspendisse bibendum efficitur orci, a pretium erat mattis nec. Vestibulum antema ypsumi primis inaetahsjanoti faucibus orci luctus etenjot ultrices posuere cubilia andt Interdum et malesuada fames ac ante ipsum primis in faucibus.Etiam eu nibh elementum, accumsan ona neque ac, aliquet nunc.In eu ipsum fringilla, accumsan purus vel, pellentesque risus.Vivamus vehicula nl purus at eros interdum, in dignissim nulla vestibulum.Nunc sit amet finibus felis, ut egestas lacus.Sedan pellentesque quis magna eu vestibulum.Ut sed commodo neque.Morbi erat nisi, vehicula quis faucibus il aliquet nunc.In eu ipsum fringilla, accumsan purus vel, pellentesque risus.Vivamus vehicula noted by thi ut, hendrerit vel tortor.In pharetra lectus luctus ornare sollicitudin.",
  //   highlight: {
  //     desc: "I work with Alguneb Johnl on many projects, he always beeni toldagona exci my expectations with his quality work and fastestopa tope service, very smooth and simple.",
  //     name: "Leslie Alexander",
  //   },
  //   title2: "Our Begin Now To Beingonl",
  //   desc2:
  //     "urna Aenean onewaryzo eleifend vitae tellus a facilisis. Nunc posuere at augue eget onem porta. Inei odio goral tubeleti tellus, dignissim fermentumara purus nec, consequat dapibus toura gonem metus.Vivamus urna worlda mauris, faucibus at egestas quis, fermentum egetonav nequet Duis pharetra lectus nec risusonl pellentesque, toi vitae aliquet nisi dapibus. Sed volutpat mot velit, ateng maximus est eleifend accui Fusce porttitor ex archunabo. dignissim fermentumara purus nec, consequat dapibus toura gonem metus.Vivamus urna worlda Phasellus one viverra lorem ant nibh placerat tincidunt.bolgotai Aliquam andit rutrum.",
  //   title3: "Arcu At Mauris Facilisis Fermentum",
  //   desc3:
  //     "urna Aenean onewaryzo eleifend vitae tellus a facilisis. Nunc posuere at augue eget portat Inei odio tellus, dignissim fermentumara purus nec, consequat dapibus metus.Vivamus one urna worlda mauris, faucibus at egestas quis, fermentum egetonav neque.",
  //   comments: [
  //     {
  //       id: 1,
  //       author: {
  //         name: "Polard Girdet",
  //         profile:
  //           "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/inner-pages/comment-img-01.png",
  //       },
  //       date: "Jan 2, 2021",
  //       comment:
  //         "Odio tellus, dignissim fermentumara purus nec, consequat dapibus metus.Vivamusut urna world classo mauris, faucibus at egestas quis, fermentum egetonav neque. Duisonajt pharetra lectus nec risusonota and we are always support our customer support available.",
  //     },
  //     {
  //       id: 2,
  //       author: {
  //         name: "Andrew Watson",
  //         profile:
  //           "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/inner-pages/comment-img-02.png",
  //       },
  //       date: "Jan 10, 2021",
  //       comment:
  //         "Odio tellus, dignissim fermentumara purus nec, consequat dapibus metus.Vivamusut urna world classo mauris, faucibus at egestas quis, fermentum egetonav neque. Duisonajt pharetra lectus nec risusonota and we are always support our customer support available.",
  //     },
  //   ],
  // };
  return (
    <div className="">
      <div className="singleBlog cus_container">
        <div className="single-blog-content">
          <div className="px-5">
            <Image
              width={1000}
              height={500}
              src={data?.img}
              alt={(data?.title, data?.short_des)}
              className="max-h-[300px] md:max-h-[400px] object-scale-down"
            />
            <h3>{data?.title}</h3>
            <ul>
              <li>
                <Image
                  width={100}
                  height={80}
                  src={data?.profile?.img || "/images/Image_not_available.png"}
                  alt={data?.profile?.user_name}
                  className="object-cover"
                />
                <p>
                  By,{" "}
                  <span style={{ color: "var(--first-color)" }}>
                    {data?.profile?.user_name || "Mezbah Uddin"}
                  </span>
                </p>
              </li>
              <li> {moment(data?.createAt).format("MMMM Do YYYY")}</li>
            </ul>
            {/* <p className="para">{singleblog.desc1}</p> */}
            <div className="highlight">
              <p>{`"${data?.short_des}"`}</p>
              <h5 style={{ color: "var(--first-color)" }}>{data?.highLight}</h5>
            </div>
            <div>{parse(data?.long_des)}</div>
            <br />
            <br />
            <br />
            <br />
            <h4>
              {comments?.length}
              {comments?.length > 1 ? " Comments" : " Comment"}
            </h4>
            {/* {comments?.map((comment) => {
              return (
                <div key={comment.id} className="commentsDiv">
                  <Image
                    width={200}
                    height={100}
                    alt={comment.name}
                    src={comment.img || "/images/Image_not_available.png"}
                    className="object-scale-down"
                  />
                  <div className="commentDetails">
                    <h5>{comment.name}</h5>
                    <p className="date" style={{ color: "var(--first-color)" }}>
                      {moment(comment.createAt).format("MMMM Do YYYY")}
                    </p>
                    <p className="para">{comment.comment}</p>
                  </div>
                </div>
              );
            })} */}
            <CommentForm blogId={blogId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
