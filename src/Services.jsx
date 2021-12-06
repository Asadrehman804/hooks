import React from "react";
import Card from "./Card";


const Services = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            <Card imgscr="https://picsum.photos/id/1/367/267"/>
                            <Card imgscr="https://picsum.photos/id/0/367/267"/>
                            <Card imgscr="https://picsum.photos/id/1010/367/267"/>
                            <Card imgscr="https://picsum.photos/id/1048/367/267"/>
                            <Card imgscr="https://picsum.photos/id/1073/367/267"/>
                            <Card imgscr="https://picsum.photos/id/119/367/267"/>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Services;