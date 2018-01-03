# Healthcheck Data Service
# healthcheck data service [ ![build status](https://git.sami.int.thomsonreuters.com/compass/cta-app-healthcheckdataservice/badges/master/build.svg)](https://git.sami.int.thomsonreuters.com/compass/cta-app-healthcheckdataservice/commits/master) [![coverage report](https://git.sami.int.thomsonreuters.com/compass/cta-app-healthcheckdataservice/badges/master/coverage.svg)](https://git.sami.int.thomsonreuters.com/compass/cta-app-healthcheckdataservice/commits/master)

Healthcheck Data Service for Compass Test Automation, One of an application in CTA-OSS Framework

## General Overview

### Overview

The **Healthcheck Data Service** is an application in **_Compass Test Automation_**. This application is checking the health of other CTA-data service such as cta-app-executiondataservice, cta-app-jobmanagerservice, cta-app-schedulerdataservice, etc. It also receives and records any status.

### Features

* Generate the startup message to report the instace information to message queue

* Receive **Executions** from message queue, **cta-messaging** and run it

* Provide an API to receive **test statuses** from test and generate to message queue 

### CTA-OSS Implementation

There are **several ways** to implement CTA-OSS Framework. We suggest that you _learn **how CTA-OSS Framework is structured**_ and _implement the way **that is appropriated to your work**_.

## Guidelines

We aim to give you brief guidelines here.

1. [Usage](#1-usage)
1. [Structure](#2-structure)

### 1. Usage

Make sure that you have **installed the package**

```javascript
nmp install
```

To **start the service**

```javascript
node [application_directory]/lib/index.js
```

[back to top](#guidelines)

### 2. Structure

Implementing CTA-OSS Framework, we setup the application into three parts:

1. **Application**
1. **Bricks**
1. **Utilities**

#### 1. Application:

The applcation consists of **entry point** and **configuration**.

The **entry point** of the application is located at:

```
[application_directory]/lib/apps/main/app.js
```

The **configuration**, that describes how the application be setup and processed, is located at:

```
[application_directory]/lib/apps/main/config/
```

#### 2. Bricks:

The **Bricks** consists of **_all the brick modules_** which application require to run. The bricks are modules implementing **cta-brick** as _a unit of work_. It is located at:

```
[application_directory]/lib/bricks/
```

#### 3. Utilities:

The **Utilities** consists of **_all other modules_** which application require to run. The utilities are _supporting modules_ providing functionalities. It is located at:

```
[application_directory]/lib/utils/
```

[back to top](#guidelines)

------

# Development Guide

## Contributing
You can follow [these steps](https://git.sami.int.thomsonreuters.com/compass/cta/blob/master/contributing.md) to contribute.

## More Information
Our service is composed of different components working together to schedule, run, collect tests results and more. You can find additional information for more understand in Execution Data Service.
We also cover in detail :
* The [Rest API](https://git.sami.int.thomsonreuters.com/compass/cta-app-agent/wikis/restapi) is composed of multiple REST service to perform actions on CTA.
* A [DataContract](https://git.sami.int.thomsonreuters.com/compass/cta-app-agent/wikis/datacontract) is a formal agreement between a bricks.
* The [Document](https://git.sami.int.thomsonreuters.com/compass/cta-app-agent/wikis/document) associated with a software project and the system being.
* A [Sequence Diagrams](https://git.sami.int.thomsonreuters.com/compass/cta-app-agent/wikis/sequencediagram) is an interaction diagram that shows how objects operate with one another and in what order.

------

## To Do

------

This code is running live at **CTA-OSS**. We also have [CTA Central Document](https://git.sami.int.thomsonreuters.com/compass/cta)



# Summary
* [Rest API](RESTAPI.md)
* [Data Contract](DATACONTRACT.md)
* [Documentation](DOCUMENTATION.md)