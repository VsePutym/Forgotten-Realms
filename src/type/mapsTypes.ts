export interface MapsTypes {
	currentDistance: number,
	minDistanceX: number,
	maxDistanceX: number,
	artifacts: string[],
	showPortal: boolean
}

export interface healthsProps{
	health: number,
	positionX: number,
	positionY: number,
	takeHealth: boolean,
	img: string,
	healthWith: number
}
export interface PlatformTypes {
	platformY: number;
	platformX: number;
	platformWidth: number,
	platformHeight: number
}
export type platformsImgType = {
	img: string
}

export interface Artifacts {
	artifactsY: number,
	artifactsX: number,
	artifactsWidth: number,
	artifactsHeight: number,
	takeArtifact: boolean,
	img: string
}

export interface PortalProps {
	portalY: number,
	portalX: number
}

export interface ObjectsProps{
	objectY: number,
	objectX: number,
	objectWidth: number,
	objectHeight: number,
	img: string,
	zIndex: number
}