import React from "react";
import { Button } from "reactstrap";

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <Button color="info" className="btn btn-info">
                Все
            </Button>
            <Button outline color="info" className="btn btn-outline-secondary">
                Понравилось
            </Button>
        </div>
    );
};

export default PostStatusFilter;
