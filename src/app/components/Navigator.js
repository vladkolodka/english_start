import React, { Component } from 'react';
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import RightArrow from 'material-ui-icons/KeyboardArrowRight';
import { withStyles } from "material-ui/styles";

const pages = {
    courses: 'Courses',
    article: 'Article'
};

const Item = ({ isActive = false, pageName, plain = true, classes }) => <div className={classes.item}>
    {plain && <RightArrow className={classes.arrow} />}
    <Typography color={isActive ? 'accent' : 'default'} className={classes.itemText}>
        {pageName}
    </Typography>
</div>;

class Navigator extends Component {
    render() {
        const { classes } = this.props;
        const items = this.props.path === '/' ? [] : this.props.path.split('/').slice(1);
        return (
            <div className={classes.container}>
                <Item pageName='Home' plain={false} classes={classes} />
                {items.length != 0 && items.map((v, i) =>
                    pages.hasOwnProperty(v) ?
                        <Item key={v} pageName={pages[v]} isActive={i + 1 == items.length} classes={classes} /> : null)}
            </div>
        );
    }
}

const styles = {
    container: {
        padding: '5px 0px 5px 10px'
    },
    item: {
        display: 'inline-block'
    },
    arrow: {
        marginBottom: -6
    },
    itemText: {
        display: 'inline-block',
        fontSize: 20
    }
};

export default withStyles(styles)(Navigator);