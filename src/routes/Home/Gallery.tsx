import { ChevronRight } from "@mui/icons-material";
import { Container, Fab, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { DeviceType, IOS_DEVICE_TYPES } from "@schoolpower/constants/DeviceType";
import { splideOptions } from "@schoolpower/constants/theme";
import { useLanguage } from "@schoolpower/hooks/useLanguage";
import { useSimpleState } from "@schoolpower/hooks/useSimpleState";
import { screenshotsByDeviceLanguage } from "@schoolpower/stores/Screenshots";
import { Splide, SplideProps, SplideSlide } from "@splidejs/react-splide";
import { observer } from "mobx-react";
import React from "react";
import { useTranslation } from "react-i18next";

const useDeviceState = () => useSimpleState<DeviceType>("iPhone");

export const Gallery = () => {
    const device = useDeviceState();
    const {t} = useTranslation();
    return (
        <Stack sx={{bgcolor: "primary"}} pt={28}>
            <Stack justifyContent={"center"}>
                <Typography variant={"h4"} textAlign={"center"} fontWeight={600} pb={4}>
                    {t("home.gallery.title")}
                </Typography>
                <DeviceSelect device={device}/>
                <DeviceCarousel device={device}/>
            </Stack>
        </Stack>
    );
};

interface IDeviceStateProps {
    device: ReturnType<typeof useDeviceState>;
}

const DeviceSelect = observer(({device}: IDeviceStateProps) => (
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
            {/*TODO Enable when android is available*/}
            {IOS_DEVICE_TYPES.map(it => (
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

// Workaround for issues with carousel dynamic image loading,
// just pre-render a separate component for each set of images.
let carouselByDevice: Map<DeviceType, React.ReactNode> | null = null;

const imageMaxWidth = new Map<DeviceType, string>([
    ["iPhone", "20rem"],
    ["iPad", "30rem"],
    ["Mac", "60rem"],
    ["Android", "20rem"],
]);

const DeviceCarousel = observer(({device}: IDeviceStateProps) => {
    if (carouselByDevice === null) {
        // TODO Enable when android is available
        carouselByDevice = new Map(IOS_DEVICE_TYPES.map(it => [it, (
            <CarouselByDevice
                key={it}
                options={splideOptions(it)}
                device={it}
                maxWidth={imageMaxWidth.get(it)}
            />
        )]));
    }
    return (
        <>{carouselByDevice.get(device.value)}</>
    );
});

const CarouselByDevice = ({options, device, maxWidth}: {
    options: SplideProps["options"],
    device: DeviceType,
    maxWidth?: string
}) => {
    const language = useLanguage();
    const images = screenshotsByDeviceLanguage.get(device)?.get(language) ?? [];
    return (
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
                        <Stack width="100%" pb={6} sx={{justifyContent: "center", alignItems: "center"}}>
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
};

const CarouselArrow = () => (
    <Fab
        color={"secondary"}
        sx={{width: 32, minHeight: 32, maxHeight: 32}}
    >
        <ChevronRight sx={{fill: "white !important"}}/>
    </Fab>
);
