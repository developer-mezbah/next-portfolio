export const revalidate = 0; 
import Card from "@/DasComponent/DashboardHome/Card/card";
import styles from "@/DasComponent/DashboardHome/dashboard.module.css";
import Transaction from "@/DasComponent/DashboardHome/Transaction/Transaction";
import Chart from "@/DasComponent/DashboardHome/Chart/Chart";
import RightBar from "@/DasComponent/DashboardHome/Rightbar/Rightbar";
import { PrismaClient } from "@prisma/client";
import CommentTable from "@/DasComponent/Tables/CommentsTable";

async function getData() {
  const prisma = new PrismaClient();
  // let all_blog = await prisma.blog.findMany({
  //   orderBy: { createAt: "desc" },
  //   select: {
  //     id: true,
  //     title: true,
  //     createAt: true,
  //     updateAt: true,
  //   },
  // });
  // let all_comment = await prisma.comment.findMany({
  //   orderBy: { createAt: "desc" },
  //   select: {
  //     id: true,
  //     name: true,
  //     createAt: true,
  //     updateAt: true,
  //   },
  // });
  // let all_message = await prisma.message.findMany({
  //   orderBy: { createAt: "desc" },
  //   select: {
  //     id: true,
  //     email: true,
  //     createAt: true,
  //     updateAt: true,
  //   },
  // });
  // let all_portfolio = await prisma.portfolio.findMany({
  //   orderBy: { createAt: "desc" },
  //   select: {
  //     id: true,
  //     title: true,
  //     createAt: true,
  //     updateAt: true,
  //   },
  // });

  let visitor_data = await prisma.visitor_data.count();
  let projects = await prisma.Projects.count();
  let blog = await prisma.Blog.count();
  // let visitor_data = await prisma.visitor_data.count();

  // return { all_blog, all_comment, all_message, all_portfolio, visitor_data };\
  return {visitor_data,projects,blog}
}


const page = async () => {
  const data = await getData()
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card number={data?.visitor_data} title="Total Unique Visitors" />
          <Card number={data?.projects} title="Total Projects" />
          <Card number={data?.blog} title="Total Blogs" />
        </div>
        <CommentTable/>
        {/* <Transaction /> */}
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
};

export default page;
