import React, {Component} from 'react';
import {Row} from "react-bootstrap"
import {Col} from "react-bootstrap"
import MyCard from "./MyCard"

export default function StoreOverview(props) {
    return (
        <ul>
        </ul>
    )
}

const url = "https://localhost:9443/api/teams ";
export async function getServerSideProps() {
    // Default options are marked with *
    const res = await fetch(url, {
        method: 'GET',
        withCredentials: true,
        headers: {
            "x-api-key": "ptr_HyM+KJc0//mIhm95HpTxHOTGXGL55wcd0Tp8xe87Kl4="
        }
    })
    const users = await res.json()
    console.log(users)
    return {props: {
            users
        }}
}