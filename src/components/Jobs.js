import React,{useEffect, useState} from 'react'
import HelloWorld from './HelloWorld'
import PrimarySearchAppBar from './PrimarySearchAppBar'
import axios from '../services/axios';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from "@material-ui/core/Avatar";
import Loader from 'react-loader-spinner'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

const Jobs = () => {

    const classes = useStyles();

    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        axios.get('/jobs')
        .then((res) => {
            if(res && res.data){
                setJobs(res.data);
                setIsLoading(false);
            }
        })
    }, [])
    return (
        <div>
            <PrimarySearchAppBar />
            {
                isLoading && (
                    <Loader
                        style={{
                            width: '100px',
                            height: '100px',
                            position: 'absolute',
                            top:'0',
                            bottom: '0',
                            left: '0',
                            right: '0',
                            margin: 'auto',
                        }}
                        type="Oval"
                        color="#00BFFF"
                        height={40}
                        width={40}
                    />
                )
            }
            <List className={classes.root}>
                {
                    jobs && (
                        jobs.map((val, key) => (
                            <div>
                                <ListItem key={key}>
                                    <ListItemAvatar>
                                        <Avatar src={val.company_logo} />
                                    </ListItemAvatar>
                                    <ListItemText primary={val.title} secondary={<a href={val.url} >{val.url}</a>} />
                                </ListItem>
                                <Divider />
                            </div>
                        ))
                    )
                }
            </List>
            
        </div>
    );
}

export default Jobs;