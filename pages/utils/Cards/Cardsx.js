import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Buttonx from "../Button/Buttonx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Link from "next/link";
import Image from "next/image";
import { reduceString } from "../../functions/Functions";
import styles from "./Cards.module.css";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque. Urna et pharetra pharetra massa massa. Rhoncus urna neque viverra justo nec ultrices. Eros in cursus turpis massa tincidunt. Mattis enim ut tellus elementum sagittis vitae. Donec ac odio tempor orci. Pretium nibh ipsum consequat nisl. Aliquam purus sit amet luctus venenatis lectus magna. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Morbi blandit cursus risus at ultrices mi tempus. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Pretium lectus quam id leo. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Sit amet luctus venenatis lectus. Ornare lectus sit amet est placerat in egestas. Aliquam ultrices sagittis orci a scelerisque purus. Neque vitae tempus quam pellentesque nec nam aliquam sem. Risus sed vulputate odio ut. Eros in cursus turpis massa. Et sollicitudin ac orci phasellus egestas. Ut tristique et egestas quis ipsum suspendisse ultrices. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Viverra vitae congue eu consequat ac felis donec et. Sit amet est placerat in egestas. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. At imperdiet dui accumsan sit amet nulla facilisi. Ipsum nunc aliquet bibendum enim facilisis. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Libero id faucibus nisl tincidunt eget nullam non nisi est. Ultrices dui sapien eget mi proin sed. Proin fermentum leo vel orci porta non pulvinar neque. Ut consequat semper viverra nam libero justo laoreet. Est pellentesque elit ullamcorper dignissim. Quis eleifend quam adipiscing vitae proin sagittis nisl. Bibendum neque egestas congue quisque. At volutpat diam ut venenatis. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Fermentum dui faucibus in ornare quam viverra. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Elementum curabitur vitae nunc sed velit. Venenatis cras sed felis eget velit aliquet sagittis. Non odio euismod lacinia at quis risus sed vulputate odio. Vitae ultricies leo integer malesuada nunc vel risus commodo. Turpis in eu mi bibendum neque egestas congue quisque. Urna et pharetra pharetra massa massa ultricies mi. Sit amet est placerat in egestas erat imperdiet sed euismod. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Semper auctor neque vitae tempus quam pellentesque nec. Ullamcorper sit amet risus nullam eget felis eget. Tempus egestas sed sed risus pretium quam vulputate. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Risus feugiat in ante metus dictum. Hendrerit gravida rutrum quisque non. Eget felis eget nunc lobortis mattis aliquam faucibus. Feugiat pretium nibh ipsum consequat. Vel orci porta non pulvinar neque. Nisl pretium fusce id velit ut tortor. Morbi tincidunt ornare massa eget. Eu volutpat odio facilisis mauris sit amet massa vitae. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Scelerisque viverra mauris in aliquam sem fringilla. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Leo urna molestie at elementum eu. Quis ipsum suspendisse ultrices gravida. Sed tempus urna et pharetra pharetra massa massa. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Ornare arcu dui vivamus arcu felis bibendum ut.";

function Cardsx({ data }) {
  const [expanded, setExpanded] = React.useState(false);
  const [numb, setnumb] = useState(150);
  const [curnumb, setcurnumb] = useState(0);

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "100%",
      maxHeight: `${numb === 150 ? "250px" : "300px"} `,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    titlesm: {
      fontSize: "12px",
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  }));
  const classes = useStyles();
  useEffect(() => {
    setcurnumb(window.innerWidth);
    if (window.innerWidth <= 500) {
      setnumb(150);
    } else {
      setnumb(500);
    }
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if (numb === 150) {
    return (
      <div className={styles.main_div}>
        <Card className={classes.root}>
          <div className={styles.title}>
            <div className={numb === 150 ? styles.title1sm : styles.title1}>
              {" "}
              {data.topic}{" "}
            </div>
            <div className={numb === 150 ? styles.title2sm : styles.title2}>
              {" "}
              {data.date}{" "}
            </div>
          </div>

          <CardContent>
            <div className={styles.cards_body1}>
              <div className={styles.cards_image}>
                {" "}
                <Image
                  src={data.img}
                  width={"100%"}
                  height={"100%"}
                  alt="Image placeholder"
                  className={styles.imagep}
                />{" "}
              </div>
              <div className={styles.cards_content}>
                {" "}
                <div
                  className={numb === 150 ? classes.titlesm : classes.titlelg}
                >
                  {reduceString(data.subject, numb)}...{" "}
                  <span style={{ textAlign: "center" }}>
                    {" "}
                    <Buttonx text="View" size="10px" />
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return (
      <div className={styles.main_div}>
        <Card className={classes.root}>
          <div className={styles.cardlg1}>
            <div className={styles.cardimglg}>
              {" "}
              <Image
                src={data.img}
                width="300"
                height="300"
                alt="Image placeholder"
              />{" "}
            </div>
            <div className={styles.cardcontentlg}>
              <div className={styles.title}>
                <div className={numb === 150 ? styles.title1sm : styles.title1}>
                  {" "}
                  {data.topic}{" "}
                </div>
                <div className={numb === 150 ? styles.title2sm : styles.title2}>
                  {" "}
                  {data.date}{" "}
                </div>
              </div>
              <CardContent>
                <div className={styles.cards_body1}>
                  <div className={styles.cards_content}>
                    {" "}
                    <div
                      className={
                        numb === 150 ? classes.titlesm : classes.titlelg
                      }
                    >
                      {reduceString(data.subject, curnumb < 900 ? 150 : numb)}
                      ...{" "}
                    </div>
                  </div>
                </div>
              </CardContent>
              <div>
                <div>
                  <Buttonx text="View more" />{" "}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Cardsx;
