import React, { useState } from "react";
import { AnimatePresence, AnimateSharedLayout} from "framer-motion";
import { Grid, makeStyles } from "@material-ui/core";
import Card from "./Card";
import ExtendedCard from "./ExtendedCard";
import { articleList } from "../../data";
import { useTranslation } from "react-i18next";

const ArticlesGallery = () => {
    const classes = useStyles();
    const { t } = useTranslation()
    const [selectedId, setSelectedId] = useState(null);

    const getSelected = (id) => articleList.find((elem) => elem.id === id);
    return (
        <AnimateSharedLayout type="crossfade">
            <Grid container  spacing={4} className={classes.galleryContainer}>
                {articleList.map((item, k) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={item.id}
                        classes={{ item: classes.item }}
                        >
                        <Card
                            id={item.id}
                            title={item.title}
                            overview={t(`articles_${item.id}_overview`)}
                            backgroundImage={item.backgroundImage}
                            frontImage={item.frontImage}
                            technologies={item.technologies}
                            onClick={() => setSelectedId(item.id)}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                        />
                    </Grid>
                ))}
            </Grid>
            <AnimatePresence>
                {selectedId && (
                    <ExtendedCard
                        key={selectedId}
                        id={selectedId}
                        title={getSelected(selectedId).title}
                        overview={t(`articles_${selectedId}_extended_overview`)}
                        backgroundImage={getSelected(selectedId).backgroundImage}
                        frontImage={getSelected(selectedId).frontImage}
                        technologies={getSelected(selectedId).technologies}
                        handleClose={() => setSelectedId(null)}
                    />
                )}
            </AnimatePresence>
        </AnimateSharedLayout>
    );
};

const useStyles = makeStyles((theme) => ({
    galleryContainer: {
        overflow: "visible",
        width:"100%",
        margin:"0 auto"
    },
    item: {
        overflow: "visible",
    },
}));

export default ArticlesGallery;
