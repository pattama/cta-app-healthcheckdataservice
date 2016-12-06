Data contracts
==============

* [Inputs](#inputs)
    * [healthcheck update](#healthcheck-update)
    
# Inputs

## Healthcheck update

````
{
    "nature": {
        "type": "healthcheck",
        "quality": "update"
    },
    "payload": {
        "name": "myapp",
        "child": "some app service",
        "status": "red",
        "reason": "some reason"
    }
}
````