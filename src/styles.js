import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "85%",
        height: "100%",
    },
    imageContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%",
        marginBottom: "20px",
    },
}));