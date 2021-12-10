import { ChevronRight } from "@mui/icons-material";
import { Container, Fab, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { DEVICE_TYPES, DeviceType, IOSDeviceType } from "@schoolpower/constants/DeviceType";
import { splideOptions } from "@schoolpower/constants/theme";
import { useSimpleState } from "@schoolpower/hooks/useSimpleState";
import { Splide, SplideProps, SplideSlide } from "@splidejs/react-splide";
import { observer } from "mobx-react";
import React from "react";

import a from "/public/a.png";

const iOSScreenShots = async (
    device: IOSDeviceType,
    language: string
) => {
    const ghBase = "https://raw.githubusercontent.com/SchoolPower/schoolpower-ios-v2/master/screenshots-compressed";
    const cdnbase = "https://cdn.jsdelivr.net/gh/SchoolPower/schoolpower-ios-v2@master/screenshots-compressed";
    const deviceName = new Map<IOSDeviceType, string>([
        ["iPhone", "iPhone 13 Pro Max (15.0)"],
        ["iPad", "iPad Pro (12.9-inch) (5th generation) (15.0)"],
        ["Mac", "MacBook Pro (12.0.1)"],
    ]);
    const ghScreenshotsDir = `${ghBase}/${deviceName.get(device)}/${language}`;
    const cdnScreenshotsDir = `${cdnbase}/${deviceName.get(device)}/${language}`;
    const screenshotsList: string[] = await fetch(`${ghScreenshotsDir}/images.json`)
        .then(response => response.json());
    return screenshotsList.map(filename => `${cdnScreenshotsDir}/${filename}`);
};

const imagesByDevice = new Map<DeviceType, string[]>([
    ["iPhone", await iOSScreenShots("iPhone", "English")],
    ["iPad", await iOSScreenShots("iPad", "English")],
    ["Mac", await iOSScreenShots("Mac", "English")],
    ["Android", Array(10).fill(0).map(_ => a)],
]);

const maxWidth = new Map<DeviceType, string>([
    ["iPhone", "20rem"],
    ["iPad", "30rem"],
    ["Mac", "60rem"],
    ["Android", "20rem"],
]);

const useDeviceState = () => useSimpleState<DeviceType>("iPhone");

export const Gallery = () => {
    const device = useDeviceState();
    return (
        <Stack sx={{bgcolor: "primary"}} pt={28}>
            <Stack justifyContent={"center"}>
                <Typography variant={"h4"} textAlign={"center"} fontWeight={600} pb={4}>
                    Gallery
                </Typography>
                <DeviceSelect device={device}/>
                <DeviceCarousel device={device}/>
            </Stack>
        </Stack>
    );
};

interface IProps {
    device: ReturnType<typeof useDeviceState>;
}

const DeviceSelect = observer(({device}: IProps) => (
    <Stack alignItems={"center"} pb={4}>
        <ToggleButtonGroup
            color="secondary"
            value={device.value}
            onChange={(_, value: DeviceType | null) => {
                if (value !== null && value !== device.value) {
                    device.set(value);
                }
            }}
            aria-label="device"
            exclusive
        >
            {DEVICE_TYPES.map(it => (
                <ToggleButton
                    key={it}
                    value={it}
                    aria-label={it}
                    sx={{width: "min(120px, 20vw)"}}
                >
                    {it}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    </Stack>
));

const Temp = ({options, images, maxWidth}: {
    options: SplideProps["options"],
    images: string[],
    maxWidth?: string
}) => (
    <Container>
        <Splide
            options={options}
            renderControls={() => (
                <div className={"splide__arrows"}>
                    <div className="splide__arrow splide__arrow--prev" style={{opacity: 1}}>
                        <CarouselArrow/>
                    </div>
                    <div className="splide__arrow splide__arrow--next" style={{opacity: 1}}>
                        <CarouselArrow/>
                    </div>
                </div>
            )}
        >
            {images.map((it, index) => (
                <SplideSlide key={index}>
                    <Stack width="100%" pb={3} sx={{justifyContent: "center", alignItems: "center"}}>
                        <img
                            draggable={false}
                            style={{width: `min(${maxWidth ?? "100%"}, 100%)`}}
                            src={it}
                        />
                    </Stack>
                </SplideSlide>
            ))}
        </Splide>
    </Container>
);

let temps: Map<DeviceType, React.ReactNode> | null = null;

const DeviceCarousel = observer(({device}: IProps) => {
    if (temps === null) {
        temps = new Map<DeviceType, React.ReactNode>(DEVICE_TYPES.map(it => [it, (
            <Temp key={it} options={splideOptions(it)} images={imagesByDevice.get(it) ?? []}
                  maxWidth={maxWidth.get(it)}/>
        )]));
    }
    return (
        <>{temps.get(device.value)}</>
    );
});

const CarouselArrow = () => (
    <Fab
        color={"secondary"}
        sx={{width: 32, minHeight: 32, maxHeight: 32}}
    >
        <ChevronRight sx={{fill: "white !important"}}/>
    </Fab>
);
