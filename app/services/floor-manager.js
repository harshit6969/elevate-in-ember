import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class FloorManagerService extends Service {
  @tracked floorSetup = [
    {
      number: 5,
      hasLiftA: false,
      hasLiftB: false,
      hasLiftC: true,
      isLast: true,
      isFirst: false,
    },
    {
      number: 4,
      hasLiftA: false,
      hasLiftB: false,
      hasLiftC: false,
      isLast: false,
      isFirst: false,
    },
    {
      number: 3,
      hasLiftA: false,
      hasLiftB: true,
      hasLiftC: false,
      isLast: false,
      isFirst: false,
    },
    {
      number: 2,
      hasLiftA: false,
      hasLiftB: false,
      hasLiftC: false,
      isLast: false,
      isFirst: false,
    },
    {
      number: 1,
      hasLiftA: true,
      hasLiftB: false,
      hasLiftC: false,
      isLast: false,
      isFirst: true,
    },
  ];

  updateLiftPosition(movementType, floorNumber) {
    const length = this.floorSetup.length;
    const currentFloor = this.floorSetup.filter(
      floor => floor.number === floorNumber
    )[0];
    const { hasLiftA, hasLiftB, hasLiftC } = currentFloor;

    let nextFloor;

    if (movementType === "up") {
      if (currentFloor.isLast) {
        alert("Where are you headed bruh!");
        return;
      }

      nextFloor = this.floorSetup.filter(
        (floor) => floor.number === floorNumber + 1
      )[0];
    } else {
      if (currentFloor.isFirst) {
        alert("Where are you headed bruh!");
        return;
      }

      nextFloor = this.floorSetup.filter(
        (floor) => floor.number === floorNumber - 1
      )[0];
    }

    const nextFloorNewState = { ...nextFloor, hasLiftA, hasLiftB, hasLiftC };
    const currentFloorNewState = {
      ...currentFloor,
      hasLiftA: hasLiftA === true ? !hasLiftA : hasLiftA,
      hasLiftB: hasLiftB === true ? !hasLiftB : hasLiftB,
      hasLiftC: hasLiftC === true ? !hasLiftC : hasLiftC,
    };

    const newFloorState =
      movementType === "up"
        ? [nextFloorNewState, currentFloorNewState]
        : [currentFloorNewState, nextFloorNewState];
    let floorSetup = this.floorSetup;
    floorSetup.splice(length - floorNumber - 1, 2, ...newFloorState);
    this.floorSetup = floorSetup;
  }
}
