# allaRomana

#### Database structure
[
    {
        "id": "ghy2dhv6a1u9ey8",
        "name": "Users",
        "type": "auth",
        "system": false,
        "schema": [
            {
                "system": false,
                "id": "yn9owikl",
                "name": "money",
                "type": "number",
                "required": false,
                "presentable": false,
                "unique": false,
                "options": {
                    "min": null,
                    "max": null,
                    "noDecimal": false
                }
            }
        ],
        "indexes": [],
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {
            "allowEmailAuth": true,
            "allowOAuth2Auth": true,
            "allowUsernameAuth": true,
            "exceptEmailDomains": null,
            "manageRule": null,
            "minPasswordLength": 8,
            "onlyEmailDomains": null,
            "onlyVerified": false,
            "requireEmail": false
        }
    },
    {
        "id": "oz69oahq6jzjzuq",
        "name": "Transactions",
        "type": "base",
        "system": false,
        "schema": [
            {
                "system": false,
                "id": "tjbw75sh",
                "name": "creditor_id",
                "type": "relation",
                "required": false,
                "presentable": false,
                "unique": false,
                "options": {
                    "collectionId": "ghy2dhv6a1u9ey8",
                    "cascadeDelete": false,
                    "minSelect": null,
                    "maxSelect": 1,
                    "displayFields": null
                }
            },
            {
                "system": false,
                "id": "uccslhki",
                "name": "debitor_id",
                "type": "relation",
                "required": false,
                "presentable": false,
                "unique": false,
                "options": {
                    "collectionId": "ghy2dhv6a1u9ey8",
                    "cascadeDelete": false,
                    "minSelect": null,
                    "maxSelect": 1,
                    "displayFields": null
                }
            },
            {
                "system": false,
                "id": "gaqt07km",
                "name": "payment",
                "type": "number",
                "required": false,
                "presentable": false,
                "unique": false,
                "options": {
                    "min": null,
                    "max": null,
                    "noDecimal": false
                }
            },
            {
                "system": false,
                "id": "dc9t7dzx",
                "name": "title",
                "type": "text",
                "required": false,
                "presentable": false,
                "unique": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "system": false,
                "id": "xqw8jjla",
                "name": "description",
                "type": "text",
                "required": false,
                "presentable": false,
                "unique": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            }
        ],
        "indexes": [],
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {}
    }
]
