import { AccountCircle, BugReport, ExpandLess, ExpandMore, Message } from "@mui/icons-material";
import {
    Avatar,
    Card,
    Chip,
    Collapse,
    Container,
    Grid,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack
} from "@mui/material";
import { SectionHeader } from "@schoolpower/components/SectionHeader";
import { useSimpleState } from "@schoolpower/hooks/useSimpleState";
import { observer } from "mobx-react";
import React from "react";

interface ICredit {
    name: string,
    imageURL: string,
}

interface ICreditSection {
    title: string,
    icon: React.ReactElement,
    credits: ICredit[],
}

const creditSections: ICreditSection[] = [
    {
        title: "Bug Reports",
        icon: <BugReport color={"info"}/>,
        credits: [
            {
                name: "さかまたクロヱ",
                imageURL: "https://i1.sndcdn.com/artworks-M3MiBvSdqvqjAyVj-movmDw-t500x500.jpg"
            },
            {
                name: "ほしまちすいせい",
                imageURL: "https://i1.sndcdn.com/artworks-M3MiBvSdqvqjAyVj-movmDw-t500x500.jpg"
            },
            {
                name: "アンジュカトリナ",
                imageURL: "https://i1.sndcdn.com/artworks-M3MiBvSdqvqjAyVj-movmDw-t500x500.jpg"
            },
            {
                name: "リゼヘルエスタ",
                imageURL: "https://i1.sndcdn.com/artworks-M3MiBvSdqvqjAyVj-movmDw-t500x500.jpg"
            },
            {
                name: "いぬいとこ",
                imageURL: "https://i1.sndcdn.com/artworks-M3MiBvSdqvqjAyVj-movmDw-t500x500.jpg"
            },
            {
                name: "なきりあやめ",
                imageURL: "https://i1.sndcdn.com/artworks-M3MiBvSdqvqjAyVj-movmDw-t500x500.jpg"
            },
        ],
    },
    {
        title: "Test Accounts",
        icon: <AccountCircle color={"info"}/>,
        credits: []
    },
    {
        title: "Valuable Suggestions",
        icon: <Message color={"info"}/>,
        credits: [
            {
                name: "さかまたクロヱ",
                imageURL: "https://i1.sndcdn.com/artworks-M3MiBvSdqvqjAyVj-movmDw-t500x500.jpg"
            },
        ]
    },
];

const CreditSection = observer(({section}: { section: ICreditSection }) => {
    const open = useSimpleState(section.credits.length > 0);
    return (
        <>
            <ListItemButton onClick={open.toggle}>
                <ListItemIcon>
                    {section.icon}
                </ListItemIcon>
                <ListItemText primary={section.title}/>
                {open.value ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={open.value} timeout="auto" unmountOnExit>
                <Grid container p={2} minHeight={56} spacing={1}>
                    {section.credits.map((it, index) => (
                        <Grid key={index} item>
                            <Chip avatar={<Avatar src={it.imageURL}/>} label={it.name}/>
                        </Grid>
                    ))}
                </Grid>
            </Collapse>
        </>
    );
});


export const Credits = () => {
    return (
        <Stack sx={{bgcolor: "primary.main"}} pt={13} pb={13}>
            <Container>
                <SectionHeader
                    title={"Credits and Acknowledgements"}
                    subtitle={"Thank you to the following people for providing help and support with the development and maintenance of SchoolPower."}
                />
                <Grid container justifyContent={"center"} pt={8} pb={4}>
                    <Grid item xs={12} sm={8} lg={6}>
                        <Card sx={{borderRadius: 3}}>
                            <List
                                sx={{width: "100%", bgcolor: "background.paper", padding: 0}}
                                component="nav"
                            >
                                {creditSections.map((it, index) => (
                                    <CreditSection section={it} key={index}/>
                                ))}
                            </List>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    );
};