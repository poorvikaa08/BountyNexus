"client";
import SubmitBug from './reportbug';
import Dashbar from '../../components/dashbar/dashbar.jsx';
import React from 'react';
import styles from "./reportbug.css";


function ReportPage() {
    return (
        <div>
            <Dashbar />
            <SubmitBug />
        </div>
    );
}

export default ReportPage;