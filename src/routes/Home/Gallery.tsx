import { ChevronRight } from "@mui/icons-material";
import { Container, Fab, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { DEVICE_TYPES, DeviceType } from "@schoolpower/constants/DeviceType";
import { splideOptions } from "@schoolpower/constants/theme";
import { useSimpleState } from "@schoolpower/hooks/useSimpleState";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { observer } from "mobx-react";
import React from "react";

import a from "/public/a.png";

interface IProps {
    device: ReturnType<typeof useDeviceState>;
}

const useDeviceState = () => useSimpleState<DeviceType>("iPhone");

export const Gallery = () => {
    const device = useDeviceState();
    return (
        <Stack sx={{bgcolor: "primary"}} pt={20}>
            <Stack alignContent={"center"}>
                <Typography variant={"h4"} textAlign={"center"} fontWeight={600} pb={4}>
                    Gallery
                </Typography>
                <DeviceSelect device={device}/>
                <DeviceCarousel device={device}/>
            </Stack>
        </Stack>
    );
};

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
                    sx={{width: "min(120px, 28vw)"}}
                >
                    {it}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    </Stack>
));

const imagesByDevice = new Map<DeviceType, string[]>([
    ["iPhone", Array(10).fill(0).map(_ => a)],
    ["iPad", Array(10).fill(0).map(_ => a)],
    ["Android", Array(10).fill(0).map(_ => a)],
]);

const DeviceCarousel = observer(({device}: IProps) => {
    const images = imagesByDevice.get(device.value) ?? [];
    return (
        <Container>
            <Splide
                options={splideOptions}
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
                            <Typography sx={{zIndex: 10, position: "absolute"}}>{device.value}</Typography>
                            <img draggable={false} style={{width: "min(320px, 100%)"}} src={it}/>
                        </Stack>
                    </SplideSlide>
                ))}
            </Splide>
        </Container>
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
