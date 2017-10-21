import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class Article extends Component {
    render() {
        const { classes, article } = this.props;
        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={article.imageUrl}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography type="headline" component="h2">
                        {article.title}
                    </Typography>
                    <Typography component="p">
                        {article.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button dense color="primary">
                        Learn
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

const styles = {
    card: {
        // maxWidth: 345,
        marginBottom: 15
    },
    media: {
        height: 200,
    },
};

export default withStyles(styles)(Article);