export const restApiPlaceHolder = (route, controller, routeName) => {

    const arr = [];

    if (controller.index) {

        arr.push(route.route(`/${routeName}`).get(controller.index));

    }
    if (controller.show) {

        arr.push(route.route(`/${routeName}/:_id`).get(controller.show));

    }

    if (controller.create) {

        arr.push(route.route(`/${routeName}`).post(controller.create));

    }
    if (controller.update) {

        arr.push(route.route(`/${routeName}/:_id`).put(controller.update));

    }
    if (controller.destroy) {

        arr.push(route.route(`/${routeName}/:_id`).delete(controller.destroy));

    }

    return arr;

};
