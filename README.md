# usgs-earthquake-data-view
A simple web app to categorize earthquake data and create awareness.
# Earquake App
Structure:
1. components: The components that made up the app.(sidebarLink, Row, text data)
2. configs: The app configuration. It can also be updated to extend from the .env.
3. containers: They are wrappers for the components(sidebarLinks, sidebar, sidebarHeader, mainContainer and mainContent).
4. context: This is a combination of the react context api and useReducer. It is a directory for the app's global state management. It contains the state, context interfaces, hooks, actions, and appReducer.
5. interface: This contain resusable interface and type codes.
6. pages: This is where the dashboad page is created.
7. services: This contains the api and functions that help power the web app.
8. style: This is where global design values are specified. It can also be updated.
9.  This contains the helper functions.

## Summary
0. Created services to 
    - connect to the USGS service (APIService)
    - request data from USGS service (EarquakeService)
    - turn on the an auto data fetching with EarthquakeService.watch and the config.watchMin.
    - cancel sync with EarthquakeService.stopWatch
    - created a logService which can be updated to report app errors.
    - created a dummy notification service to notify friends and family members of the danger ahead via sms and email can be updated.
    - created a dummy subscription service to subscibe for triggers in a particular area.

1. Pulled data from USGS using the EarthquakeService.

2. categorized data into locations, status, features, types, tsunami etc.. with the hook useSetEarthquakeData.

3. created a simple UI to see categorization (sidebar) and data (mainContainer).
