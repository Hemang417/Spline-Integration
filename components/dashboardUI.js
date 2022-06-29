import classes from './dashboardUI.module.css';

function DashboardUI(){
    return (
        <div className={classes.container}>
            <iframe className={classes.frame} src='https://my.spline.design/splinecourse-b060c4716f81ab6476cd755f9d1b7783/' frameborder='0' width='100%' height='100%'></iframe>
        </div>
    );
}

export default DashboardUI;

