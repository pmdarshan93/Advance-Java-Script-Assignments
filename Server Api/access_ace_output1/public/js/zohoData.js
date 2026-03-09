const ZOHO_API_DATA = {
  "apps": [
    {
      "key": "crm",
      "label": "Zoho CRM"
    },
    {
      "key": "books",
      "label": "Zoho Books"
    },
    {
      "key": "desk",
      "label": "Zoho Desk"
    },
    {
      "key": "mail",
      "label": "Zoho Mail"
    },
    {
      "key": "projects",
      "label": "Zoho Projects"
    },
    {
      "key": "people",
      "label": "Zoho People"
    },
    {
      "key": "recruit",
      "label": "Zoho Recruit"
    },
    {
      "key": "campaigns",
      "label": "Zoho Campaigns"
    },
    {
      "key": "inventory",
      "label": "Zoho Inventory"
    },
    {
      "key": "analytics",
      "label": "Zoho Analytics"
    },
    {
      "key": "sign",
      "label": "Zoho Sign"
    },
    {
      "key": "workdrive",
      "label": "WorkDrive"
    },
    {
      "key": "cliq",
      "label": "Zoho Cliq"
    },
    {
      "key": "creator",
      "label": "Zoho Creator"
    },
    {
      "key": "flow",
      "label": "Zoho Flow"
    },
    {
      "key": "social",
      "label": "Zoho Social"
    },
    {
      "key": "survey",
      "label": "Zoho Survey"
    },
    {
      "key": "expense",
      "label": "Zoho Expense"
    },
    {
      "key": "subscriptions",
      "label": "Zoho Subscriptions"
    },
    {
      "key": "payroll",
      "label": "Zoho Payroll"
    },
    {
      "key": "sprints",
      "label": "Zoho Sprints"
    },
    {
      "key": "meeting",
      "label": "Zoho Meeting"
    },
    {
      "key": "vault",
      "label": "Zoho Vault"
    },
    {
      "key": "connect",
      "label": "Zoho Connect"
    },
    {
      "key": "salesiq",
      "label": "Zoho SalesIQ"
    },
    {
      "key": "bigin",
      "label": "Zoho Bigin"
    },
    {
      "key": "fsm",
      "label": "Zoho FSM"
    },
    {
      "key": "backstage",
      "label": "Zoho Backstage"
    },
    {
      "key": "oauth",
      "label": "Zoho OAuth"
    }
  ],
  "data": {
    "crm": {
      "scopes": [
        "ZohoCRM.modules.ALL",
        "ZohoCRM.modules.READ",
        "ZohoCRM.modules.CREATE",
        "ZohoCRM.modules.UPDATE",
        "ZohoCRM.modules.DELETE",
        "ZohoCRM.settings.ALL",
        "ZohoCRM.settings.READ",
        "ZohoCRM.users.ALL",
        "ZohoCRM.users.READ",
        "ZohoCRM.org.ALL",
        "ZohoCRM.org.READ",
        "ZohoCRM.bulk.ALL",
        "ZohoCRM.bulk.READ",
        "ZohoCRM.bulk.CREATE",
        "ZohoCRM.notifications.ALL",
        "ZohoCRM.notifications.CREATE",
        "ZohoCRM.coql.READ",
        "ZohoCRM.Files.ALL",
        "ZohoCRM.mass_update.ALL"
      ],
      "baseUrl": "https://www.zohoapis.com/crm/v6",
      "endpoints": {
        "Get Contacts": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Contacts",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Contact By ID": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Contacts/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Search Contacts": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Contacts/search",
          "params": {
            "criteria": "(Last_Name:equals:Smith)"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Contact": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "First_Name": "John",
                "Last_Name": "Doe",
                "Email": "john@example.com",
                "Phone": "1234567890"
              }
            ]
          }
        },
        "Update Contact": {
          "scope": "ZohoCRM.modules.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/crm/v6/Contacts/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "id": "{record_id}",
                "Phone": "9876543210"
              }
            ]
          }
        },
        "Upsert Contact": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Contacts/upsert",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Email": "john@example.com",
                "First_Name": "John",
                "Last_Name": "Doe"
              }
            ],
            "duplicate_check_fields": [
              "Email"
            ]
          }
        },
        "Delete Contact": {
          "scope": "ZohoCRM.modules.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/crm/v6/Contacts/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Delete Contacts": {
          "scope": "ZohoCRM.modules.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/crm/v6/Contacts",
          "params": {
            "ids": "id1,id2,id3"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Contact Related Lists": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Contacts/{record_id}/{related_module}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Count Contacts": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Contacts/actions/count",
          "params": {
            "criteria": "(Last_Name:equals:Smith)"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Leads": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Leads",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Lead By ID": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Leads/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Search Leads": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Leads/search",
          "params": {
            "criteria": "(Last_Name:equals:Smith)"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Lead": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Leads",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Last_Name": "Smith",
                "Company": "ABC Corp",
                "Email": "smith@example.com",
                "Phone": "1234567890",
                "Lead_Source": "Web Site"
              }
            ]
          }
        },
        "Update Lead": {
          "scope": "ZohoCRM.modules.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/crm/v6/Leads/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "id": "{record_id}",
                "Lead_Status": "Contacted"
              }
            ]
          }
        },
        "Delete Lead": {
          "scope": "ZohoCRM.modules.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/crm/v6/Leads/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Convert Lead": {
          "scope": "ZohoCRM.modules.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Leads/{record_id}/actions/convert",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "overwrite": true,
                "notify_lead_owner": true,
                "notify_new_entity_owner": true,
                "Accounts": {},
                "Contacts": {},
                "Deals": {
                  "Deal_Name": "New Deal",
                  "Closing_Date": "2025-12-31",
                  "Stage": "Qualification",
                  "Amount": 5000
                }
              }
            ]
          }
        },
        "Upsert Lead": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Leads/upsert",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Email": "smith@example.com",
                "Last_Name": "Smith",
                "Company": "ABC Corp"
              }
            ],
            "duplicate_check_fields": [
              "Email"
            ]
          }
        },
        "Count Leads": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Leads/actions/count",
          "params": {
            "criteria": "(Lead_Status:equals:Open)"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Accounts": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Accounts",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Account By ID": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Accounts/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Search Accounts": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Accounts/search",
          "params": {
            "criteria": "(Account_Name:equals:Acme)"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Account": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Accounts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Account_Name": "Acme Corp",
                "Website": "https://acme.com",
                "Phone": "1234567890",
                "Industry": "Technology",
                "Annual_Revenue": 1000000
              }
            ]
          }
        },
        "Update Account": {
          "scope": "ZohoCRM.modules.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/crm/v6/Accounts/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "id": "{record_id}",
                "Annual_Revenue": 2000000
              }
            ]
          }
        },
        "Delete Account": {
          "scope": "ZohoCRM.modules.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/crm/v6/Accounts/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Upsert Account": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Accounts/upsert",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Account_Name": "Acme Corp"
              }
            ],
            "duplicate_check_fields": [
              "Account_Name"
            ]
          }
        },
        "Get Deals": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Deals",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Deal By ID": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Deals/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Search Deals": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Deals/search",
          "params": {
            "criteria": "(Stage:equals:Qualification)"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Deal": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Deals",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Deal_Name": "Big Deal",
                "Stage": "Proposal/Price Quote",
                "Closing_Date": "2025-12-31",
                "Amount": 50000,
                "Account_Name": {
                  "name": "Acme Corp"
                }
              }
            ]
          }
        },
        "Update Deal": {
          "scope": "ZohoCRM.modules.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/crm/v6/Deals/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "id": "{record_id}",
                "Stage": "Closed Won",
                "Amount": 60000
              }
            ]
          }
        },
        "Delete Deal": {
          "scope": "ZohoCRM.modules.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/crm/v6/Deals/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Deals by Stage": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Deals/search",
          "params": {
            "criteria": "(Stage:equals:Closed Won)",
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Tasks": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Tasks",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Task": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Tasks",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Subject": "Follow Up",
                "Due_Date": "2025-12-31",
                "Status": "Not Started",
                "Priority": "High",
                "$se_module": "Contacts",
                "What_Id": {
                  "name": "John Doe",
                  "id": "{contact_id}"
                }
              }
            ]
          }
        },
        "Update Task": {
          "scope": "ZohoCRM.modules.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/crm/v6/Tasks/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "id": "{record_id}",
                "Status": "Completed"
              }
            ]
          }
        },
        "Delete Task": {
          "scope": "ZohoCRM.modules.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/crm/v6/Tasks/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Calls": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Calls",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Call": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Calls",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Subject": "Client Call",
                "Call_Type": "Outbound",
                "Call_Start_Time": "2025-12-31T10:00:00+05:30",
                "Call_Duration": "00:30",
                "Description": "Discuss proposal"
              }
            ]
          }
        },
        "Get Events": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Events",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Event": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Events",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Event_Title": "Product Demo",
                "Start_DateTime": "2025-12-31T10:00:00+05:30",
                "End_DateTime": "2025-12-31T11:00:00+05:30",
                "All_day": false
              }
            ]
          }
        },
        "Get Notes": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Notes",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Note": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Notes",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Note_Title": "Meeting Note",
                "Note_Content": "Discussed pricing",
                "Parent_Id": {
                  "id": "{record_id}"
                },
                "$se_module": "Contacts"
              }
            ]
          }
        },
        "Update Note": {
          "scope": "ZohoCRM.modules.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/crm/v6/Notes/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "id": "{record_id}",
                "Note_Content": "Updated content"
              }
            ]
          }
        },
        "Delete Note": {
          "scope": "ZohoCRM.modules.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/crm/v6/Notes/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Users": {
          "scope": "ZohoCRM.users.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/users",
          "params": {
            "type": "ActiveUsers"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get User By ID": {
          "scope": "ZohoCRM.users.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/users/{user_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create User": {
          "scope": "ZohoCRM.users.ALL",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/users",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "users": [
              {
                "role": {
                  "id": "{role_id}"
                },
                "profile": {
                  "id": "{profile_id}"
                },
                "first_name": "Jane",
                "last_name": "Smith",
                "email": "jane@example.com"
              }
            ]
          }
        },
        "Update User": {
          "scope": "ZohoCRM.users.ALL",
          "method": "PUT",
          "url": "https://www.zohoapis.com/crm/v6/users/{user_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "users": [
              {
                "id": "{user_id}",
                "first_name": "Jane Updated"
              }
            ]
          }
        },
        "Get Organization": {
          "scope": "ZohoCRM.org.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/org",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Modules": {
          "scope": "ZohoCRM.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/settings/modules",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Module Fields": {
          "scope": "ZohoCRM.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/settings/fields",
          "params": {
            "module": "Contacts"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Layouts": {
          "scope": "ZohoCRM.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/settings/layouts",
          "params": {
            "module": "Contacts"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Pipelines": {
          "scope": "ZohoCRM.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/settings/pipeline",
          "params": {
            "module": "Deals"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Roles": {
          "scope": "ZohoCRM.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/settings/roles",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Profiles": {
          "scope": "ZohoCRM.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/settings/profiles",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Custom Views": {
          "scope": "ZohoCRM.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/{module}/cvlayout",
          "params": {
            "module": "Contacts"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Territories": {
          "scope": "ZohoCRM.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/settings/territories",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Business Hours": {
          "scope": "ZohoCRM.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/settings/business_hours",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Email Templates": {
          "scope": "ZohoCRM.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/settings/email_templates",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "COQL Query": {
          "scope": "ZohoCRM.coql.READ",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/coql",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "select_query": "select Last_Name, First_Name, Email from Contacts where Last_Name = 'Smith' limit 200"
          }
        },
        "Create Bulk Read Job": {
          "scope": "ZohoCRM.bulk.READ",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/bulk/v6/read",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "query": {
              "module": {
                "api_name": "Contacts"
              },
              "fields": [
                "Last_Name",
                "First_Name",
                "Email"
              ],
              "page": 1
            },
            "callback": {
              "url": "https://yourapp.com/callback",
              "method": "post"
            }
          }
        },
        "Get Bulk Read Job Status": {
          "scope": "ZohoCRM.bulk.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/bulk/v6/read/{job_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Download Bulk Read Result": {
          "scope": "ZohoCRM.bulk.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/bulk/v6/read/{job_id}/result",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Upload File for Bulk Write": {
          "scope": "ZohoCRM.bulk.CREATE",
          "method": "POST",
          "url": "https://content.zohoapis.com/crm/v6/upload",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Bulk Write Job": {
          "scope": "ZohoCRM.bulk.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/bulk/v6/write",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "operation": "insert",
            "callback": {
              "url": "https://yourapp.com/callback",
              "method": "post"
            },
            "resource": [
              {
                "type": "data",
                "module": {
                  "api_name": "Contacts"
                },
                "file_id": "{file_id}"
              }
            ]
          }
        },
        "Get Bulk Write Job Status": {
          "scope": "ZohoCRM.bulk.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/bulk/v6/write/{job_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Enable Notifications": {
          "scope": "ZohoCRM.notifications.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/actions/watch",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "watch": [
              {
                "channel_id": "1000000068001",
                "events": [
                  "Leads.all",
                  "Contacts.all",
                  "Accounts.all",
                  "Deals.all"
                ],
                "channel_expiry": "2026-01-01T00:00:00+05:30",
                "notify_url": "https://yourapp.com/notify"
              }
            ]
          }
        },
        "Get Notifications": {
          "scope": "ZohoCRM.notifications.ALL",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/actions/watch",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Update Notifications": {
          "scope": "ZohoCRM.notifications.ALL",
          "method": "PATCH",
          "url": "https://www.zohoapis.com/crm/v6/actions/watch",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "watch": [
              {
                "channel_id": "1000000068001",
                "events": [
                  "Leads.all"
                ]
              }
            ]
          }
        },
        "Disable Notifications": {
          "scope": "ZohoCRM.notifications.ALL",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/crm/v6/actions/watch",
          "params": {
            "channel_id": "1000000068001"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Mass Update Records": {
          "scope": "ZohoCRM.mass_update.ALL",
          "method": "PUT",
          "url": "https://www.zohoapis.com/crm/v6/{module}/actions/mass_update",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Lead_Status": "Contacted"
              }
            ],
            "ids": [
              "{id1}",
              "{id2}"
            ]
          }
        },
        "Merge Records": {
          "scope": "ZohoCRM.modules.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/{module}/{record_id}/actions/merge",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "id": "{record_id}"
              }
            ]
          }
        },
        "Upload File": {
          "scope": "ZohoCRM.Files.ALL",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/files",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get File": {
          "scope": "ZohoCRM.Files.ALL",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/files",
          "params": {
            "id": "{file_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Products": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Products",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Product": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Products",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Product_Name": "Widget Pro",
                "Unit_Price": 99.99,
                "Product_Category": "Software",
                "Description": "Our flagship product"
              }
            ]
          }
        },
        "Update Product": {
          "scope": "ZohoCRM.modules.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/crm/v6/Products/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "id": "{record_id}",
                "Unit_Price": 149.99
              }
            ]
          }
        },
        "Delete Product": {
          "scope": "ZohoCRM.modules.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/crm/v6/Products/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Quotes": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Quotes",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Quote": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Quotes",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Subject": "Q-001",
                "Quoted_Items": [
                  {
                    "product": {
                      "name": "Widget Pro",
                      "id": "{product_id}"
                    },
                    "quantity": 10,
                    "unit_price": 99.99
                  }
                ]
              }
            ]
          }
        },
        "Update Quote": {
          "scope": "ZohoCRM.modules.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/crm/v6/Quotes/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "id": "{record_id}",
                "Approval_State": "Approved"
              }
            ]
          }
        },
        "Get Invoices (CRM)": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Invoices",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Invoice (CRM)": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Invoices",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Subject": "INV-001",
                "Invoiced_Items": [
                  {
                    "product": {
                      "name": "Widget Pro"
                    },
                    "quantity": 5,
                    "unit_price": 99.99
                  }
                ]
              }
            ]
          }
        },
        "Get Campaigns (CRM)": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Campaigns",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Campaign (CRM)": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Campaigns",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Campaign_Name": "Q4 Promo",
                "Type": "Email",
                "Status": "Planning",
                "Start_Date": "2025-10-01",
                "End_Date": "2025-12-31"
              }
            ]
          }
        },
        "Get Cases": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Cases",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Case": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Cases",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Subject": "Product Issue",
                "Status": "New",
                "Priority": "High",
                "Description": "Customer reported a bug"
              }
            ]
          }
        },
        "Get Vendors": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/Vendors",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Vendor": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Vendors",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Vendor_Name": "Supplier Inc",
                "Email": "vendor@example.com",
                "Phone": "1234567890"
              }
            ]
          }
        },
        "Get Record Attachments": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v6/{module}/{record_id}/Attachments",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Delete Attachment": {
          "scope": "ZohoCRM.modules.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/crm/v6/{module}/{record_id}/Attachments/{attachment_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Send Mail from CRM": {
          "scope": "ZohoCRM.modules.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/Contacts/{record_id}/actions/send_mail",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "from": {
                  "user_name": "Sales",
                  "email": "sales@example.com"
                },
                "to": [
                  {
                    "user_name": "John Doe",
                    "email": "john@example.com"
                  }
                ],
                "subject": "Follow Up",
                "content": "Hi John,...",
                "mail_format": "html"
              }
            ]
          }
        },
        "Schedule Data Backup": {
          "scope": "ZohoCRM.bulk.ALL",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/bulk/v6/backup",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Backup Download URLs": {
          "scope": "ZohoCRM.bulk.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/bulk/v6/backup/urls",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Cancel Data Backup": {
          "scope": "ZohoCRM.bulk.ALL",
          "method": "PUT",
          "url": "https://www.zohoapis.com/crm/bulk/v6/backup/{id}/actions/cancel",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Composite API Request": {
          "scope": "ZohoCRM.modules.ALL",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v6/composite",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "requests": [
              {
                "method": "POST",
                "url": "/crm/v6/Contacts",
                "body": {
                  "data": [
                    {
                      "First_Name": "John",
                      "Last_Name": "Doe",
                      "Email": "john@example.com"
                    }
                  ]
                }
              },
              {
                "method": "GET",
                "url": "/crm/v6/Contacts/search?criteria=(Email:equals:john@example.com)"
              }
            ]
          }
        }
      }
    },
    "books": {
      "scopes": [
        "ZohoBooks.fullaccess.all",
        "ZohoBooks.contacts.READ",
        "ZohoBooks.contacts.CREATE",
        "ZohoBooks.contacts.UPDATE",
        "ZohoBooks.contacts.DELETE",
        "ZohoBooks.invoices.READ",
        "ZohoBooks.invoices.CREATE",
        "ZohoBooks.invoices.UPDATE",
        "ZohoBooks.invoices.DELETE",
        "ZohoBooks.estimates.READ",
        "ZohoBooks.estimates.CREATE",
        "ZohoBooks.expenses.READ",
        "ZohoBooks.expenses.CREATE",
        "ZohoBooks.bills.READ",
        "ZohoBooks.bills.CREATE",
        "ZohoBooks.items.READ",
        "ZohoBooks.items.CREATE",
        "ZohoBooks.salesorders.READ",
        "ZohoBooks.salesorders.CREATE",
        "ZohoBooks.purchaseorders.READ",
        "ZohoBooks.purchaseorders.CREATE",
        "ZohoBooks.journals.READ",
        "ZohoBooks.journals.CREATE",
        "ZohoBooks.chartofaccounts.READ",
        "ZohoBooks.reports.READ",
        "ZohoBooks.settings.READ",
        "ZohoBooks.banking.READ",
        "ZohoBooks.customerpayments.READ",
        "ZohoBooks.customerpayments.CREATE",
        "ZohoBooks.vendorpayments.READ",
        "ZohoBooks.vendorpayments.CREATE",
        "ZohoBooks.creditnotes.READ",
        "ZohoBooks.creditnotes.CREATE",
        "ZohoBooks.vendorcredits.READ",
        "ZohoBooks.projects.READ"
      ],
      "baseUrl": "https://www.zohoapis.com/books/v3",
      "endpoints": {
        "Get Contacts": {
          "scope": "ZohoBooks.contacts.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/contacts?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Contact By ID": {
          "scope": "ZohoBooks.contacts.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/contacts/{contact_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Contact": {
          "scope": "ZohoBooks.contacts.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/contacts?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "contact_name": "Acme Corp",
            "contact_type": "customer",
            "currency_id": "{currency_id}",
            "billing_address": {
              "address": "123 Main St",
              "city": "New York",
              "state": "NY",
              "country": "USA",
              "zip": "10001"
            }
          }
        },
        "Update Contact": {
          "scope": "ZohoBooks.contacts.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/books/v3/contacts/{contact_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "contact_name": "Acme Corp Updated",
            "phone": "9876543210"
          }
        },
        "Delete Contact": {
          "scope": "ZohoBooks.contacts.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/books/v3/contacts/{contact_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Mark Contact Active": {
          "scope": "ZohoBooks.contacts.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/contacts/{contact_id}/active?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Mark Contact Inactive": {
          "scope": "ZohoBooks.contacts.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/contacts/{contact_id}/inactive?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Contact Addresses": {
          "scope": "ZohoBooks.contacts.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/contacts/{contact_id}/addresses?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Contact Persons": {
          "scope": "ZohoBooks.contacts.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/contacts/{contact_id}/contactpersons?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Contact Person": {
          "scope": "ZohoBooks.contacts.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/contacts/{contact_id}/contactpersons?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "first_name": "John",
            "last_name": "Doe",
            "email": "john@example.com",
            "phone": "1234567890",
            "is_primary_contact": true
          }
        },
        "Get Invoices": {
          "scope": "ZohoBooks.invoices.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/invoices?organization_id={organization_id}",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Invoice By ID": {
          "scope": "ZohoBooks.invoices.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/invoices/{invoice_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Invoice": {
          "scope": "ZohoBooks.invoices.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/invoices?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "customer_id": "{customer_id}",
            "invoice_number": "INV-001",
            "date": "2025-12-31",
            "payment_terms": 30,
            "line_items": [
              {
                "item_id": "{item_id}",
                "quantity": 5,
                "rate": 99.99
              }
            ]
          }
        },
        "Update Invoice": {
          "scope": "ZohoBooks.invoices.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/books/v3/invoices/{invoice_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "notes": "Payment due in 30 days"
          }
        },
        "Delete Invoice": {
          "scope": "ZohoBooks.invoices.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/books/v3/invoices/{invoice_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Email Invoice": {
          "scope": "ZohoBooks.invoices.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/invoices/{invoice_id}/email?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "send_from_org_email_id": true,
            "to_mail_ids": [
              "customer@example.com"
            ],
            "subject": "Invoice from Acme",
            "body": "Please find the invoice attached."
          }
        },
        "Void Invoice": {
          "scope": "ZohoBooks.invoices.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/invoices/{invoice_id}/status/void?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Mark Invoice Sent": {
          "scope": "ZohoBooks.invoices.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/invoices/{invoice_id}/status/sent?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Invoice PDF": {
          "scope": "ZohoBooks.invoices.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/invoices/{invoice_id}?accept=pdforganization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Write Off Invoice": {
          "scope": "ZohoBooks.invoices.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/invoices/{invoice_id}/writeoff?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Record Payment for Invoice": {
          "scope": "ZohoBooks.invoices.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/invoices/{invoice_id}/payments?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "amount": 500,
            "date": "2025-12-31",
            "payment_mode": "Bank Transfer",
            "reference_number": "REF-001"
          }
        },
        "Apply Credits to Invoice": {
          "scope": "ZohoBooks.invoices.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/invoices/{invoice_id}/credits?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "invoices": [
              {
                "invoice_id": "{invoice_id}",
                "amount_applied": 100
              }
            ]
          }
        },
        "Get Bills": {
          "scope": "ZohoBooks.bills.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/bills?organization_id={organization_id}",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Bill By ID": {
          "scope": "ZohoBooks.bills.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/bills/{bill_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Bill": {
          "scope": "ZohoBooks.bills.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/bills?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "vendor_id": "{vendor_id}",
            "bill_number": "BILL-001",
            "date": "2025-12-31",
            "line_items": [
              {
                "account_id": "{account_id}",
                "rate": 500,
                "quantity": 1
              }
            ]
          }
        },
        "Update Bill": {
          "scope": "ZohoBooks.bills.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/books/v3/bills/{bill_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "notes": "Updated bill"
          }
        },
        "Delete Bill": {
          "scope": "ZohoBooks.bills.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/books/v3/bills/{bill_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Record Payment for Bill": {
          "scope": "ZohoBooks.bills.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/bills/{bill_id}/payments?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "vendor_payment_id": "{payment_id}",
            "amount": 500
          }
        },
        "Mark Bill Open": {
          "scope": "ZohoBooks.bills.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/bills/{bill_id}/status/open?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Estimates": {
          "scope": "ZohoBooks.estimates.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/estimates?organization_id={organization_id}",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Estimate": {
          "scope": "ZohoBooks.estimates.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/estimates?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "customer_id": "{customer_id}",
            "estimate_number": "EST-001",
            "line_items": [
              {
                "item_id": "{item_id}",
                "quantity": 10,
                "rate": 99.99
              }
            ]
          }
        },
        "Update Estimate": {
          "scope": "ZohoBooks.estimates.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/books/v3/estimates/{estimate_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "notes": "Updated estimate"
          }
        },
        "Delete Estimate": {
          "scope": "ZohoBooks.estimates.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/books/v3/estimates/{estimate_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Send Estimate": {
          "scope": "ZohoBooks.estimates.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/estimates/{estimate_id}/email?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "to_mail_ids": [
              "customer@example.com"
            ],
            "subject": "Estimate from Acme",
            "body": "Please review the estimate."
          }
        },
        "Accept Estimate": {
          "scope": "ZohoBooks.estimates.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/estimates/{estimate_id}/status/accepted?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Convert Estimate to Invoice": {
          "scope": "ZohoBooks.invoices.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/invoices/fromeestimate?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "estimate_id": "{estimate_id}"
          }
        },
        "Get Purchase Orders": {
          "scope": "ZohoBooks.purchaseorders.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/purchaseorders?organization_id={organization_id}",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Purchase Order": {
          "scope": "ZohoBooks.purchaseorders.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/purchaseorders?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "vendor_id": "{vendor_id}",
            "purchaseorder_number": "PO-001",
            "date": "2025-12-31",
            "line_items": [
              {
                "item_id": "{item_id}",
                "quantity": 50,
                "rate": 20
              }
            ]
          }
        },
        "Update Purchase Order": {
          "scope": "ZohoBooks.purchaseorders.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/books/v3/purchaseorders/{po_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "notes": "Updated PO"
          }
        },
        "Delete Purchase Order": {
          "scope": "ZohoBooks.purchaseorders.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/books/v3/purchaseorders/{po_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Email Purchase Order": {
          "scope": "ZohoBooks.purchaseorders.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/purchaseorders/{po_id}/email?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "to_mail_ids": [
              "vendor@example.com"
            ],
            "subject": "PO from Acme"
          }
        },
        "Get Sales Orders": {
          "scope": "ZohoBooks.salesorders.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/salesorders?organization_id={organization_id}",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Sales Order": {
          "scope": "ZohoBooks.salesorders.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/salesorders?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "customer_id": "{customer_id}",
            "salesorder_number": "SO-001",
            "date": "2025-12-31",
            "line_items": [
              {
                "item_id": "{item_id}",
                "quantity": 10,
                "rate": 99.99
              }
            ]
          }
        },
        "Update Sales Order": {
          "scope": "ZohoBooks.salesorders.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/books/v3/salesorders/{so_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "notes": "Updated SO"
          }
        },
        "Delete Sales Order": {
          "scope": "ZohoBooks.salesorders.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/books/v3/salesorders/{so_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Convert SO to Invoice": {
          "scope": "ZohoBooks.invoices.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/invoices/fromsalesorder?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "salesorder_id": "{salesorder_id}"
          }
        },
        "Get Items": {
          "scope": "ZohoBooks.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/items?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Item": {
          "scope": "ZohoBooks.settings.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/items?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Widget Pro",
            "rate": 99.99,
            "description": "Our flagship product",
            "tax_id": "{tax_id}",
            "account_id": "{account_id}"
          }
        },
        "Update Item": {
          "scope": "ZohoBooks.settings.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/books/v3/items/{item_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "rate": 149.99
          }
        },
        "Delete Item": {
          "scope": "ZohoBooks.settings.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/books/v3/items/{item_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Customer Payments": {
          "scope": "ZohoBooks.customerpayments.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/customerpayments?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Record Customer Payment": {
          "scope": "ZohoBooks.customerpayments.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/customerpayments?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "customer_id": "{customer_id}",
            "amount": 500,
            "date": "2025-12-31",
            "payment_mode": "Bank Transfer",
            "invoices": [
              {
                "invoice_id": "{invoice_id}",
                "amount_applied": 500
              }
            ]
          }
        },
        "Get Customer Payment By ID": {
          "scope": "ZohoBooks.customerpayments.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/customerpayments/{payment_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Update Customer Payment": {
          "scope": "ZohoBooks.customerpayments.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/books/v3/customerpayments/{payment_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "notes": "Payment updated"
          }
        },
        "Delete Customer Payment": {
          "scope": "ZohoBooks.customerpayments.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/books/v3/customerpayments/{payment_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Vendor Payments": {
          "scope": "ZohoBooks.vendorpayments.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/vendorpayments?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Vendor Payment": {
          "scope": "ZohoBooks.vendorpayments.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/vendorpayments?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "vendor_id": "{vendor_id}",
            "amount": 500,
            "date": "2025-12-31",
            "payment_mode": "Bank Transfer",
            "bills": [
              {
                "bill_id": "{bill_id}",
                "amount_applied": 500
              }
            ]
          }
        },
        "Get Credit Notes": {
          "scope": "ZohoBooks.creditnotes.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/creditnotes?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Credit Note": {
          "scope": "ZohoBooks.creditnotes.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/creditnotes?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "customer_id": "{customer_id}",
            "creditnote_number": "CN-001",
            "date": "2025-12-31",
            "line_items": [
              {
                "item_id": "{item_id}",
                "quantity": 1,
                "rate": 99.99
              }
            ]
          }
        },
        "Delete Credit Note": {
          "scope": "ZohoBooks.creditnotes.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/books/v3/creditnotes/{creditnote_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Apply Credit Note to Invoice": {
          "scope": "ZohoBooks.creditnotes.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/creditnotes/{creditnote_id}/invoices?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "invoices": [
              {
                "invoice_id": "{invoice_id}",
                "amount_applied": 100
              }
            ]
          }
        },
        "Get Expenses": {
          "scope": "ZohoBooks.expenses.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/expenses?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Expense": {
          "scope": "ZohoBooks.expenses.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/expenses?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "account_id": "{account_id}",
            "date": "2025-12-31",
            "amount": 200,
            "paid_through_account_id": "{account_id}",
            "description": "Office supplies"
          }
        },
        "Update Expense": {
          "scope": "ZohoBooks.expenses.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/books/v3/expenses/{expense_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "description": "Updated description"
          }
        },
        "Delete Expense": {
          "scope": "ZohoBooks.expenses.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/books/v3/expenses/{expense_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Chart of Accounts": {
          "scope": "ZohoBooks.accountants.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/chartofaccounts?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Account (Books)": {
          "scope": "ZohoBooks.accountants.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/chartofaccounts?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Office Supplies",
            "account_type": "expense",
            "currency_id": "{currency_id}"
          }
        },
        "Get Journal Entries": {
          "scope": "ZohoBooks.journals.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/journals?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Journal Entry": {
          "scope": "ZohoBooks.journals.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/journals?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "journal_date": "2025-12-31",
            "journal_number": "JNL-001",
            "notes": "Adjusting entry",
            "line_items": [
              {
                "account_id": "{account_id}",
                "description": "Debit",
                "debit_or_credit": "debit",
                "amount": 1000
              },
              {
                "account_id": "{account_id2}",
                "description": "Credit",
                "debit_or_credit": "credit",
                "amount": 1000
              }
            ]
          }
        },
        "Get Taxes": {
          "scope": "ZohoBooks.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/settings/taxes?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Tax": {
          "scope": "ZohoBooks.settings.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/settings/taxes?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "tax_name": "GST 18%",
            "tax_percentage": 18,
            "tax_type": "tax"
          }
        },
        "Get Profit and Loss Report": {
          "scope": "ZohoBooks.reports.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/reports/profitandloss?organization_id={organization_id}",
          "params": {
            "from_date": "2025-01-01",
            "to_date": "2025-12-31"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Balance Sheet": {
          "scope": "ZohoBooks.reports.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/reports/balancesheet?organization_id={organization_id}",
          "params": {
            "as_of_date": "2025-12-31"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Cash Flow Report": {
          "scope": "ZohoBooks.reports.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/reports/cashflow?organization_id={organization_id}",
          "params": {
            "from_date": "2025-01-01",
            "to_date": "2025-12-31"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get AR Aging Report": {
          "scope": "ZohoBooks.reports.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/reports/araging?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get AP Aging Report": {
          "scope": "ZohoBooks.reports.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/reports/apaging?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Recurring Invoices": {
          "scope": "ZohoBooks.invoices.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/recurringinvoices?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Recurring Invoice": {
          "scope": "ZohoBooks.invoices.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/recurringinvoices?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "customer_id": "{customer_id}",
            "recurrence_name": "Monthly Subscription",
            "start_date": "2025-01-01",
            "recurrence_frequency": "months",
            "repeat_every": 1,
            "line_items": [
              {
                "item_id": "{item_id}",
                "quantity": 1,
                "rate": 99.99
              }
            ]
          }
        },
        "Get Organizations": {
          "scope": "ZohoBooks.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/organizations",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Organization Details": {
          "scope": "ZohoBooks.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/organizations/{org_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Currencies": {
          "scope": "ZohoBooks.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/settings/currencies?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Contact Statement": {
          "scope": "ZohoBooks.contacts.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/contacts/{contact_id}/statement?organization_id={organization_id}",
          "params": {
            "from_date": "2025-01-01",
            "to_date": "2025-12-31"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        }
      }
    },
    "desk": {
      "scopes": [
        "Desk.tickets.ALL",
        "Desk.tickets.READ",
        "Desk.tickets.CREATE",
        "Desk.tickets.UPDATE",
        "Desk.tickets.DELETE",
        "Desk.contacts.READ",
        "Desk.contacts.CREATE",
        "Desk.contacts.UPDATE",
        "Desk.contacts.DELETE",
        "Desk.accounts.READ",
        "Desk.accounts.CREATE",
        "Desk.tasks.ALL",
        "Desk.tasks.READ",
        "Desk.tasks.CREATE",
        "Desk.articles.ALL",
        "Desk.articles.READ",
        "Desk.articles.CREATE",
        "Desk.agents.READ",
        "Desk.departments.READ",
        "Desk.settings.ALL",
        "Desk.search.READ",
        "Desk.events.ALL",
        "Desk.calls.ALL",
        "Desk.activities.ALL",
        "Desk.macros.ALL",
        "Desk.reports.ALL",
        "Desk.reports.READ",
        "Desk.basic.READ",
        "Desk.basic.CREATE"
      ],
      "baseUrl": "https://desk.zoho.com/api/v1",
      "endpoints": {
        "Get Tickets": {
          "scope": "Desk.tickets.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/tickets",
          "params": {
            "limit": 50,
            "from": 0
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Ticket By ID": {
          "scope": "Desk.tickets.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Search Tickets": {
          "scope": "Desk.tickets.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/tickets/search",
          "params": {
            "limit": 50,
            "from": 0,
            "query": "status:open"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Ticket": {
          "scope": "Desk.tickets.CREATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/tickets",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "contactId": "{contact_id}",
            "subject": "Technical Issue",
            "departmentId": "{department_id}",
            "channel": "Email",
            "description": "Detailed issue description",
            "priority": "High",
            "status": "Open"
          }
        },
        "Update Ticket": {
          "scope": "Desk.tickets.UPDATE",
          "method": "PATCH",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "status": "In Progress",
            "priority": "High",
            "assigneeId": "{agent_id}"
          }
        },
        "Delete Ticket": {
          "scope": "Desk.tickets.DELETE",
          "method": "DELETE",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Close Ticket": {
          "scope": "Desk.tickets.UPDATE",
          "method": "PATCH",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "status": "Closed"
          }
        },
        "Reopen Ticket": {
          "scope": "Desk.tickets.UPDATE",
          "method": "PATCH",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "status": "Open"
          }
        },
        "Get Ticket Comments": {
          "scope": "Desk.tickets.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}/comments",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Ticket Comment": {
          "scope": "Desk.tickets.CREATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}/comments",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "content": "Working on this issue",
            "isPublic": false
          }
        },
        "Get Ticket Thread": {
          "scope": "Desk.tickets.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}/threads",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Send Ticket Reply": {
          "scope": "Desk.tickets.UPDATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}/sendReply",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "content": "<p>Hello, we are looking into your issue.</p>",
            "channel": "EMAIL",
            "fromEmailAddress": "support@example.com",
            "isPublic": true
          }
        },
        "Get Ticket Attachments": {
          "scope": "Desk.tickets.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}/attachments",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Ticket Time Entry": {
          "scope": "Desk.tickets.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}/timeEntries",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Time Entry": {
          "scope": "Desk.tickets.CREATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}/timeEntries",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "agentId": "{agent_id}",
            "timeSpent": "01:30",
            "billable": true,
            "note": "Research and troubleshooting"
          }
        },
        "Assign Ticket": {
          "scope": "Desk.tickets.UPDATE",
          "method": "PATCH",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "assigneeId": "{agent_id}",
            "teamId": "{team_id}"
          }
        },
        "Merge Tickets": {
          "scope": "Desk.tickets.UPDATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}/merge",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "targetTicketId": "{target_ticket_id}"
          }
        },
        "Get Contacts (Desk)": {
          "scope": "Desk.contacts.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/contacts",
          "params": {
            "limit": 50,
            "from": 0
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Contact By ID (Desk)": {
          "scope": "Desk.contacts.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/contacts/{contact_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Contact (Desk)": {
          "scope": "Desk.contacts.CREATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "firstName": "John",
            "lastName": "Doe",
            "email": "john@example.com",
            "phone": "1234567890",
            "type": "Contact"
          }
        },
        "Update Contact (Desk)": {
          "scope": "Desk.contacts.UPDATE",
          "method": "PATCH",
          "url": "https://desk.zoho.com/api/v1/contacts/{contact_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "phone": "9876543210"
          }
        },
        "Delete Contact (Desk)": {
          "scope": "Desk.contacts.DELETE",
          "method": "DELETE",
          "url": "https://desk.zoho.com/api/v1/contacts/{contact_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Contact Tickets": {
          "scope": "Desk.contacts.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/contacts/{contact_id}/tickets",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Merge Contacts": {
          "scope": "Desk.contacts.UPDATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/contacts/{contact_id}/merge",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "targetContactId": "{target_contact_id}"
          }
        },
        "Get Accounts (Desk)": {
          "scope": "Desk.contacts.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/accounts",
          "params": {
            "limit": 50,
            "from": 0
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Account (Desk)": {
          "scope": "Desk.contacts.CREATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/accounts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "accountName": "Acme Corp",
            "website": "https://acme.com",
            "phone": "1234567890"
          }
        },
        "Update Account (Desk)": {
          "scope": "Desk.contacts.UPDATE",
          "method": "PATCH",
          "url": "https://desk.zoho.com/api/v1/accounts/{account_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "phone": "9876543210"
          }
        },
        "Delete Account (Desk)": {
          "scope": "Desk.contacts.DELETE",
          "method": "DELETE",
          "url": "https://desk.zoho.com/api/v1/accounts/{account_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Agents": {
          "scope": "Desk.basic.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/agents",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Agent By ID": {
          "scope": "Desk.basic.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/agents/{agent_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Current Agent": {
          "scope": "Desk.basic.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/agents/me",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Departments": {
          "scope": "Desk.basic.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/departments",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Department By ID": {
          "scope": "Desk.basic.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/departments/{department_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Articles": {
          "scope": "Desk.articles.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/articles",
          "params": {
            "limit": 50,
            "from": 0
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Article By ID": {
          "scope": "Desk.articles.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/articles/{article_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Article": {
          "scope": "Desk.articles.CREATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/articles",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "title": "How to reset password",
            "answer": "<p>Step 1: Click Forgot Password</p>",
            "departmentId": "{department_id}",
            "status": "Published",
            "category": {
              "id": "{category_id}"
            }
          }
        },
        "Update Article": {
          "scope": "Desk.articles.UPDATE",
          "method": "PATCH",
          "url": "https://desk.zoho.com/api/v1/articles/{article_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "title": "Updated title",
            "status": "Draft"
          }
        },
        "Delete Article": {
          "scope": "Desk.articles.DELETE",
          "method": "DELETE",
          "url": "https://desk.zoho.com/api/v1/articles/{article_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Search Articles": {
          "scope": "Desk.articles.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/articles/search",
          "params": {
            "searchStr": "password reset",
            "limit": 10
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Categories": {
          "scope": "Desk.articles.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/categories",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Category": {
          "scope": "Desk.articles.CREATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/categories",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Getting Started",
            "departmentId": "{department_id}"
          }
        },
        "Get Tasks (Desk)": {
          "scope": "Desk.tickets.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/tasks",
          "params": {
            "limit": 50,
            "from": 0
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Task (Desk)": {
          "scope": "Desk.tickets.CREATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/tasks",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "subject": "Follow up with customer",
            "dueDate": "2025-12-31",
            "ticketId": "{ticket_id}",
            "ownerId": "{agent_id}"
          }
        },
        "Get Ticket Reports": {
          "scope": "Desk.tickets.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/reports/ticket/volumes",
          "params": {
            "duration": "last_month",
            "groupBy": "status"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Agent Response Report": {
          "scope": "Desk.tickets.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/reports/responseTime",
          "params": {
            "duration": "last_month"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get SLAs": {
          "scope": "Desk.basic.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/slas",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Views": {
          "scope": "Desk.tickets.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/views",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get View Tickets": {
          "scope": "Desk.tickets.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/views/{view_id}/tickets",
          "params": {
            "limit": 50,
            "from": 0
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Custom Fields (Desk)": {
          "scope": "Desk.settings.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/customFields",
          "params": {
            "module": "tickets"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Ticket Activities": {
          "scope": "Desk.tickets.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}/activities",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Satisfaction Ratings": {
          "scope": "Desk.tickets.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/satisfactionRatings",
          "params": {
            "limit": 50,
            "from": 0
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Products (Desk)": {
          "scope": "Desk.basic.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/products",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Product (Desk)": {
          "scope": "Desk.basic.CREATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/products",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "productName": "Widget Pro",
            "description": "Our flagship product"
          }
        },
        "Get Tags": {
          "scope": "Desk.basic.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/tags",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Tags to Ticket": {
          "scope": "Desk.tickets.UPDATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}/tags",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "tags": [
              "urgent",
              "billing"
            ]
          }
        }
      }
    },
    "mail": {
      "scopes": [
        "ZohoMail.accounts.READ",
        "ZohoMail.messages.ALL",
        "ZohoMail.messages.READ",
        "ZohoMail.messages.CREATE",
        "ZohoMail.messages.UPDATE",
        "ZohoMail.messages.DELETE",
        "ZohoMail.folders.ALL",
        "ZohoMail.folders.READ",
        "ZohoMail.attachments.ALL",
        "ZohoMail.contacts.ALL",
        "ZohoMail.calendar.ALL",
        "ZohoMail.settings.ALL",
        "ZohoMail.organization.ALL",
        "ZohoMail.tags.ALL",
        "ZohoMail.tags.READ",
        "ZohoMail.filters.ALL"
      ],
      "baseUrl": "https://mail.zoho.com/api",
      "endpoints": {
        "Get Accounts": {
          "scope": "ZohoMail.accounts.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Account By ID": {
          "scope": "ZohoMail.accounts.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Update Account": {
          "scope": "ZohoMail.accounts.UPDATE",
          "method": "PUT",
          "url": "https://mail.zoho.com/api/accounts/{account_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "display_name": "John Doe"
          }
        },
        "Get Folders": {
          "scope": "ZohoMail.folders.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/folders",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Folder": {
          "scope": "ZohoMail.folders.CREATE",
          "method": "POST",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/folders",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "folderName": "Projects",
            "parentFolderId": "0"
          }
        },
        "Update Folder": {
          "scope": "ZohoMail.folders.UPDATE",
          "method": "PUT",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/folders/{folder_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "folderName": "Projects 2025"
          }
        },
        "Delete Folder": {
          "scope": "ZohoMail.folders.DELETE",
          "method": "DELETE",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/folders/{folder_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Messages": {
          "scope": "ZohoMail.messages.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/messages/view",
          "params": {
            "folderId": "{folder_id}",
            "limit": 25,
            "start": 0
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Message By ID": {
          "scope": "ZohoMail.messages.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/folders/{folder_id}/messages/{message_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Message Content": {
          "scope": "ZohoMail.messages.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/folders/{folder_id}/messages/{message_id}/content",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Send Email": {
          "scope": "ZohoMail.messages.CREATE",
          "method": "POST",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/messages",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "fromAddress": "sender@example.com",
            "toAddress": "recipient@example.com",
            "ccAddress": "cc@example.com",
            "subject": "Hello from Zoho",
            "content": "<p>This is a test email.</p>",
            "mailFormat": "html"
          }
        },
        "Reply to Email": {
          "scope": "ZohoMail.messages.CREATE",
          "method": "POST",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/messages",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "fromAddress": "sender@example.com",
            "toAddress": "recipient@example.com",
            "subject": "Re: Hello",
            "content": "<p>Replying to your email.</p>",
            "inReplyTo": "{message_id}",
            "mailFormat": "html"
          }
        },
        "Move Message": {
          "scope": "ZohoMail.messages.UPDATE",
          "method": "PUT",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/folders/{folder_id}/messages/{message_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "mode": "movemessage",
            "toFolderId": "{target_folder_id}"
          }
        },
        "Delete Message": {
          "scope": "ZohoMail.messages.DELETE",
          "method": "DELETE",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/folders/{folder_id}/messages/{message_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Mark Message Read": {
          "scope": "ZohoMail.messages.UPDATE",
          "method": "PUT",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/updatemessage",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "mode": "markAsRead",
            "messageId": [
              "{message_id}"
            ]
          }
        },
        "Mark Message Unread": {
          "scope": "ZohoMail.messages.UPDATE",
          "method": "PUT",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/updatemessage",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "mode": "markAsUnread",
            "messageId": [
              "{message_id}"
            ]
          }
        },
        "Flag Message": {
          "scope": "ZohoMail.messages.UPDATE",
          "method": "PUT",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/updatemessage",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "mode": "flag",
            "messageId": [
              "{message_id}"
            ]
          }
        },
        "Search Messages": {
          "scope": "ZohoMail.messages.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/messages/search",
          "params": {
            "searchKey": "subject:Invoice",
            "limit": 25,
            "start": 0
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Message Attachments": {
          "scope": "ZohoMail.messages.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/folders/{folder_id}/messages/{message_id}/attachments",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Download Attachment": {
          "scope": "ZohoMail.messages.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/folders/{folder_id}/messages/{message_id}/attachments/{attachment_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Upload Attachment": {
          "scope": "ZohoMail.messages.CREATE",
          "method": "POST",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/messages/attachments",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Contacts (Mail)": {
          "scope": "ZohoMail.contacts.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/contacts",
          "params": {
            "limit": 200,
            "start": 0
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Contact (Mail)": {
          "scope": "ZohoMail.contacts.CREATE",
          "method": "POST",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "firstName": "John",
            "lastName": "Doe",
            "email": "john@example.com"
          }
        },
        "Get Contact Groups": {
          "scope": "ZohoMail.contacts.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/groups",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Contact Group": {
          "scope": "ZohoMail.contacts.CREATE",
          "method": "POST",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/groups",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "displayName": "VIP Customers",
            "emailAddress": "vip@example.com"
          }
        },
        "Get Filters": {
          "scope": "ZohoMail.settings.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/filters",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Filter": {
          "scope": "ZohoMail.settings.CREATE",
          "method": "POST",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/filters",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "filterName": "Newsletters",
            "criteria": [
              {
                "field": "from",
                "condition": "contains",
                "value": "newsletter"
              }
            ],
            "action": [
              {
                "action": "moveto",
                "folderId": "{folder_id}"
              }
            ]
          }
        },
        "Get Email Aliases": {
          "scope": "ZohoMail.accounts.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/emailaliases",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Signatures": {
          "scope": "ZohoMail.settings.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/signatures",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Signature": {
          "scope": "ZohoMail.settings.CREATE",
          "method": "POST",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/signatures",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "signatureName": "Default",
            "signature": "<p>Best Regards,<br/>John</p>"
          }
        },
        "Get Tags (Mail)": {
          "scope": "ZohoMail.messages.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/tags",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Tag to Message": {
          "scope": "ZohoMail.messages.UPDATE",
          "method": "PUT",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/folders/{folder_id}/messages/{message_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "mode": "addlabel",
            "labelId": "{tag_id}"
          }
        },
        "Get Mail Templates": {
          "scope": "ZohoMail.settings.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/templates",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Mail Delegates": {
          "scope": "ZohoMail.accounts.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/delegates",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Empty Trash": {
          "scope": "ZohoMail.messages.DELETE",
          "method": "DELETE",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/trash",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Spam Messages": {
          "scope": "ZohoMail.messages.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/messages/view",
          "params": {
            "folderId": "spam",
            "limit": 25
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Mark Spam": {
          "scope": "ZohoMail.messages.UPDATE",
          "method": "PUT",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/updatemessage",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "mode": "markAsSpam",
            "messageId": [
              "{message_id}"
            ]
          }
        }
      }
    },
    "projects": {
      "scopes": [
        "ZohoProjects.portals.READ",
        "ZohoProjects.projects.ALL",
        "ZohoProjects.projects.READ",
        "ZohoProjects.projects.CREATE",
        "ZohoProjects.projects.UPDATE",
        "ZohoProjects.projects.DELETE",
        "ZohoProjects.tasks.ALL",
        "ZohoProjects.tasks.READ",
        "ZohoProjects.tasks.CREATE",
        "ZohoProjects.tasks.UPDATE",
        "ZohoProjects.tasks.DELETE",
        "ZohoProjects.milestones.ALL",
        "ZohoProjects.milestones.READ",
        "ZohoProjects.milestones.CREATE",
        "ZohoProjects.tasklists.ALL",
        "ZohoProjects.bugs.ALL",
        "ZohoProjects.bugs.READ",
        "ZohoProjects.bugs.CREATE",
        "ZohoProjects.events.ALL",
        "ZohoProjects.forums.ALL",
        "ZohoProjects.pages.ALL",
        "ZohoProjects.users.ALL",
        "ZohoProjects.timesheets.ALL",
        "ZohoProjects.timesheets.READ",
        "ZohoProjects.timesheets.CREATE",
        "ZohoProjects.documents.ALL",
        "ZohoProjects.status.ALL",
        "ZohoProjects.search.READ",
        "ZohoProjects.tags.ALL",
        "ZohoProjects.reports.ALL"
      ],
      "baseUrl": "https://projectsapi.zoho.com/restapi",
      "endpoints": {
        "Get All Portals": {
          "scope": "ZohoProjects.portals.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portals/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Projects": {
          "scope": "ZohoProjects.projects.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/",
          "params": {
            "range": 100,
            "status": "active"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Project By ID": {
          "scope": "ZohoProjects.projects.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Project": {
          "scope": "ZohoProjects.projects.CREATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Website Redesign",
            "description": "Complete website overhaul",
            "start_date": "01-01-2025",
            "end_date": "12-31-2025",
            "template_id": "{template_id}"
          }
        },
        "Update Project": {
          "scope": "ZohoProjects.projects.UPDATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Website Redesign v2",
            "status": "active"
          }
        },
        "Delete Project": {
          "scope": "ZohoProjects.projects.DELETE",
          "method": "DELETE",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Project Users": {
          "scope": "ZohoProjects.projects.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/users/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Project User": {
          "scope": "ZohoProjects.projects.UPDATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/users/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "users": [
              {
                "email": "user@example.com",
                "role": "developer"
              }
            ]
          }
        },
        "Get All Tasks": {
          "scope": "ZohoProjects.tasks.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasks/",
          "params": {
            "range": 100
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Task By ID": {
          "scope": "ZohoProjects.tasks.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasks/{task_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Task": {
          "scope": "ZohoProjects.tasks.CREATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasks/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Design Homepage",
            "person_responsible": "{user_id}",
            "start_date": "01-01-2025",
            "end_date": "01-31-2025",
            "priority": "High",
            "description": "Design the new homepage mockups"
          }
        },
        "Update Task": {
          "scope": "ZohoProjects.tasks.UPDATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasks/{task_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "status": "completed",
            "percent_complete": 100
          }
        },
        "Delete Task": {
          "scope": "ZohoProjects.tasks.DELETE",
          "method": "DELETE",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasks/{task_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Subtasks": {
          "scope": "ZohoProjects.tasks.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasks/{task_id}/subtasks/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Subtask": {
          "scope": "ZohoProjects.tasks.CREATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasks/{task_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Create wireframes",
            "person_responsible": "{user_id}"
          }
        },
        "Get Task Comments": {
          "scope": "ZohoProjects.tasks.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasks/{task_id}/comments/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Task Comment": {
          "scope": "ZohoProjects.tasks.CREATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasks/{task_id}/comments/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "content": "Work is in progress",
            "notify_all_users": true
          }
        },
        "Get Task Attachments": {
          "scope": "ZohoProjects.tasks.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasks/{task_id}/attachments/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Task Time Logs": {
          "scope": "ZohoProjects.timesheets.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasks/{task_id}/logs/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Task Time Log": {
          "scope": "ZohoProjects.timesheets.CREATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasks/{task_id}/logs/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "date": "01-15-2025",
            "hours": "2",
            "minutes": "30",
            "bill_status": "Billable",
            "notes": "Design review"
          }
        },
        "Get Milestones": {
          "scope": "ZohoProjects.milestones.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/milestones/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Milestone": {
          "scope": "ZohoProjects.milestones.CREATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/milestones/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Beta Launch",
            "end_date": "06-30-2025",
            "flag": "internal"
          }
        },
        "Update Milestone": {
          "scope": "ZohoProjects.milestones.UPDATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/milestones/{milestone_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Beta Launch Updated"
          }
        },
        "Delete Milestone": {
          "scope": "ZohoProjects.milestones.DELETE",
          "method": "DELETE",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/milestones/{milestone_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Bugs": {
          "scope": "ZohoProjects.bugs.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/bugs/",
          "params": {
            "range": 100
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Bug By ID": {
          "scope": "ZohoProjects.bugs.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/bugs/{bug_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Bug": {
          "scope": "ZohoProjects.bugs.CREATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/bugs/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "title": "Login button not working",
            "description": "The login button on mobile is unresponsive",
            "classification_id": "{classification_id}",
            "severity_id": "{severity_id}",
            "assignee": "{user_id}"
          }
        },
        "Update Bug": {
          "scope": "ZohoProjects.bugs.UPDATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/bugs/{bug_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "status_id": "{status_id}",
            "assignee": "{user_id}"
          }
        },
        "Delete Bug": {
          "scope": "ZohoProjects.bugs.DELETE",
          "method": "DELETE",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/bugs/{bug_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Bug Comment": {
          "scope": "ZohoProjects.bugs.CREATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/bugs/{bug_id}/comments/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "content": "Bug has been reproduced on iOS 17"
          }
        },
        "Get Timesheets": {
          "scope": "ZohoProjects.timesheets.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/logs/",
          "params": {
            "date_format": "dd-MM-yyyy",
            "from_date": "01-01-2025",
            "to_date": "12-31-2025"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Timesheets": {
          "scope": "ZohoProjects.timesheets.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/logs/",
          "params": {
            "from_date": "01-01-2025",
            "to_date": "12-31-2025"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Forums": {
          "scope": "ZohoProjects.forums.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/forums/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Forum Post": {
          "scope": "ZohoProjects.forums.CREATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/forums/{category_id}/posts/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Project Kickoff Discussion",
            "content": "Let's discuss the project plan"
          }
        },
        "Get Project Events": {
          "scope": "ZohoProjects.events.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/events/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Project Event": {
          "scope": "ZohoProjects.events.CREATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/events/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "title": "Sprint Planning",
            "scheduled_date": "01-15-2025",
            "hour": "10",
            "minutes": "00",
            "duration": "2",
            "participants": [
              "{user_id}"
            ]
          }
        },
        "Get Project Documents": {
          "scope": "ZohoProjects.documents.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/documents/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Project Status": {
          "scope": "ZohoProjects.projects.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/taskstatuses/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Task Status": {
          "scope": "ZohoProjects.projects.UPDATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/taskstatuses/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "In Review",
            "color": "#FF9900"
          }
        },
        "Get Task Lists": {
          "scope": "ZohoProjects.tasks.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasklists/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Task List": {
          "scope": "ZohoProjects.tasks.CREATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasklists/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Sprint 1",
            "flag": "external"
          }
        },
        "Get Tasks in List": {
          "scope": "ZohoProjects.tasks.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasklists/{tasklist_id}/tasks/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        }
      }
    },
    "people": {
      "scopes": [
        "ZOHOPEOPLE.employee.ALL",
        "ZOHOPEOPLE.employee.READ",
        "ZOHOPEOPLE.employee.CREATE",
        "ZOHOPEOPLE.employee.UPDATE",
        "ZOHOPEOPLE.leave.ALL",
        "ZOHOPEOPLE.leave.READ",
        "ZOHOPEOPLE.leave.CREATE",
        "ZOHOPEOPLE.attendance.ALL",
        "ZOHOPEOPLE.attendance.READ",
        "ZOHOPEOPLE.attendance.CREATE",
        "ZOHOPEOPLE.timetracker.ALL",
        "ZOHOPEOPLE.forms.ALL",
        "ZOHOPEOPLE.appraisal.ALL",
        "ZOHOPEOPLE.training.ALL",
        "ZOHOPEOPLE.department.ALL",
        "ZOHOPEOPLE.department.READ",
        "ZOHOPEOPLE.designation.ALL",
        "ZOHOPEOPLE.feed.ALL"
      ],
      "baseUrl": "https://people.zoho.com/people/api",
      "endpoints": {
        "Get Employees": {
          "scope": "ZohoPeople.employee.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/forms/employee/getRecords",
          "params": {
            "searchParams": "{{\"searchField\":\"EmployeeStatus\",\"searchOperator\":\"Is\",\"searchText\":\"Active\"}}",
            "sIndex": 1,
            "limit": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Employee By ID": {
          "scope": "ZohoPeople.employee.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/forms/employee/getDataByID",
          "params": {
            "recordId": "{record_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Employee": {
          "scope": "ZohoPeople.employee.CREATE",
          "method": "POST",
          "url": "https://people.zoho.com/people/api/forms/employee/insertRecord",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "inputData": {
              "FirstName": "John",
              "LastName": "Doe",
              "EmailID": "john@company.com",
              "Designation": "Engineer",
              "Department": "Technology",
              "DateOfJoining": "01-01-2025"
            }
          }
        },
        "Update Employee": {
          "scope": "ZohoPeople.employee.UPDATE",
          "method": "POST",
          "url": "https://people.zoho.com/people/api/forms/employee/updateRecord",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "inputData": {
              "recordId": "{record_id}",
              "Department": "Product",
              "Designation": "Senior Engineer"
            }
          }
        },
        "Delete Employee": {
          "scope": "ZohoPeople.employee.DELETE",
          "method": "DELETE",
          "url": "https://people.zoho.com/people/api/forms/employee/deleteRecord",
          "params": {
            "recordId": "{record_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Search Employees": {
          "scope": "ZohoPeople.employee.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/forms/employee/getRecords",
          "params": {
            "searchParams": "{{\"searchField\":\"Department\",\"searchOperator\":\"Is\",\"searchText\":\"Technology\"}}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Leave Types": {
          "scope": "ZohoPeople.leave.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/leave/getAllLeaveTypes",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Leave Balance": {
          "scope": "ZohoPeople.leave.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/leave/getLeaveTypeDetails",
          "params": {
            "userId": "{user_id}",
            "leaveType": "{leave_type}",
            "year": "2025"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Apply Leave": {
          "scope": "ZohoPeople.leave.CREATE",
          "method": "POST",
          "url": "https://people.zoho.com/people/api/leave/apply",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "leaveform": {
              "leaveType": "{leave_type_id}",
              "from": "2025-06-01",
              "to": "2025-06-05",
              "reason": "Family vacation",
              "approvalTo": "{approver_id}"
            }
          }
        },
        "Get Leave Request By ID": {
          "scope": "ZohoPeople.leave.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/leave/getIndividualLeaveDetails",
          "params": {
            "leaveId": "{leave_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Leave Requests": {
          "scope": "ZohoPeople.leave.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/leave/getLeaveRequestDetails",
          "params": {
            "userId": "{user_id}",
            "status": "pending",
            "from": "2025-01-01",
            "to": "2025-12-31"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Approve Leave": {
          "scope": "ZohoPeople.leave.UPDATE",
          "method": "POST",
          "url": "https://people.zoho.com/people/api/leave/updateLeaveStatus",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "leaveId": "{leave_id}",
            "status": "approved",
            "comments": "Approved"
          }
        },
        "Reject Leave": {
          "scope": "ZohoPeople.leave.UPDATE",
          "method": "POST",
          "url": "https://people.zoho.com/people/api/leave/updateLeaveStatus",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "leaveId": "{leave_id}",
            "status": "rejected",
            "comments": "Cannot approve during this period"
          }
        },
        "Cancel Leave": {
          "scope": "ZohoPeople.leave.UPDATE",
          "method": "POST",
          "url": "https://people.zoho.com/people/api/leave/cancelLeave",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "leaveId": "{leave_id}"
          }
        },
        "Get Attendance": {
          "scope": "ZohoPeople.attendance.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/attendance/getAttendanceEntries",
          "params": {
            "empId": "{emp_id}",
            "from": "2025-01-01",
            "to": "2025-01-31"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Attendance": {
          "scope": "ZohoPeople.attendance.CREATE",
          "method": "POST",
          "url": "https://people.zoho.com/people/api/attendance/addAttendance",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "dateFormat": "dd/MM/yyyy",
            "attendanceData": [
              {
                "empId": "{emp_id}",
                "checkIn": "09:00",
                "checkOut": "18:00",
                "checkInDate": "01/01/2025",
                "checkOutDate": "01/01/2025"
              }
            ]
          }
        },
        "Bulk Import Attendance": {
          "scope": "ZohoPeople.attendance.CREATE",
          "method": "POST",
          "url": "https://people.zoho.com/people/api/attendance/bulkImport",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Departments": {
          "scope": "ZohoPeople.org.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/org/departments/getDetails",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Department": {
          "scope": "ZohoPeople.org.CREATE",
          "method": "POST",
          "url": "https://people.zoho.com/people/api/org/departments/add",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "deptName": "Engineering",
            "deptDescription": "Software Engineering Team"
          }
        },
        "Get Designations": {
          "scope": "ZohoPeople.org.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/org/designations/getDetails",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Designation": {
          "scope": "ZohoPeople.org.CREATE",
          "method": "POST",
          "url": "https://people.zoho.com/people/api/org/designations/add",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "designationName": "Senior Engineer",
            "designationDescription": "Senior Software Engineer"
          }
        },
        "Get Form Data": {
          "scope": "ZohoPeople.forms.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/forms/{form_link_name}/getRecords",
          "params": {
            "sIndex": 1,
            "limit": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Insert Form Record": {
          "scope": "ZohoPeople.forms.CREATE",
          "method": "POST",
          "url": "https://people.zoho.com/people/api/forms/{form_link_name}/insertRecord",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "inputData": {
              "fieldName": "fieldValue"
            }
          }
        },
        "Update Form Record": {
          "scope": "ZohoPeople.forms.UPDATE",
          "method": "POST",
          "url": "https://people.zoho.com/people/api/forms/{form_link_name}/updateRecord",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "inputData": {
              "recordId": "{record_id}",
              "fieldName": "updatedValue"
            }
          }
        },
        "Delete Form Record": {
          "scope": "ZohoPeople.forms.DELETE",
          "method": "DELETE",
          "url": "https://people.zoho.com/people/api/forms/{form_link_name}/deleteRecord",
          "params": {
            "recordId": "{record_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Timesheets (People)": {
          "scope": "ZohoPeople.timetracker.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/timetracker/gettimelog",
          "params": {
            "empId": "{emp_id}",
            "period": "thisMonth"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Time Log": {
          "scope": "ZohoPeople.timetracker.CREATE",
          "method": "POST",
          "url": "https://people.zoho.com/people/api/timetracker/addtimelog",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "empId": "{emp_id}",
            "workDate": "01/01/2025",
            "billingStatus": "Billable",
            "jobId": "{job_id}",
            "hours": "8",
            "minutes": "0"
          }
        },
        "Get Separation Requests": {
          "scope": "ZohoPeople.employee.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/separation/getSeparationRequests",
          "params": {
            "status": "pending"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Appraisals": {
          "scope": "ZohoPeople.performance.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/performance/getAppraisals",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Goals": {
          "scope": "ZohoPeople.performance.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/performance/getGoals",
          "params": {
            "empId": "{emp_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        }
      }
    },
    "recruit": {
      "scopes": [
        "ZohoRecruit.modules.ALL",
        "ZohoRecruit.modules.READ",
        "ZohoRecruit.modules.CREATE",
        "ZohoRecruit.modules.UPDATE",
        "ZohoRecruit.modules.DELETE",
        "ZohoRecruit.settings.ALL",
        "ZohoRecruit.users.ALL",
        "ZohoRecruit.org.READ",
        "ZohoRecruit.bulk.ALL",
        "ZohoRecruit.notifications.ALL",
        "ZohoRecruit.jobboards.ALL"
      ],
      "baseUrl": "https://recruit.zoho.com/recruit/v2",
      "endpoints": {
        "Get Job Openings": {
          "scope": "ZohoRecruit.modules.READ",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/JobOpenings",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Job Opening By ID": {
          "scope": "ZohoRecruit.modules.READ",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/JobOpenings/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Job Opening": {
          "scope": "ZohoRecruit.modules.CREATE",
          "method": "POST",
          "url": "https://recruit.zoho.com/recruit/v2/JobOpenings",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Posting_Title": "Software Engineer",
                "Industry": "Technology",
                "Job_Type": "Full Time",
                "Remote_Job": false,
                "City": "Bangalore",
                "State": "Karnataka",
                "Country": "India",
                "Date_Opened": "2025-01-01",
                "Target_Date": "2025-06-30",
                "No_of_Positions": 5,
                "Job_Description": "We are looking for..."
              }
            ]
          }
        },
        "Update Job Opening": {
          "scope": "ZohoRecruit.modules.UPDATE",
          "method": "PUT",
          "url": "https://recruit.zoho.com/recruit/v2/JobOpenings/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "id": "{record_id}",
                "Job_Status": "Closed"
              }
            ]
          }
        },
        "Delete Job Opening": {
          "scope": "ZohoRecruit.modules.DELETE",
          "method": "DELETE",
          "url": "https://recruit.zoho.com/recruit/v2/JobOpenings/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Search Job Openings": {
          "scope": "ZohoRecruit.modules.READ",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/JobOpenings/search",
          "params": {
            "criteria": "(Job_Status:equals:Open)"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Candidates": {
          "scope": "ZohoRecruit.modules.READ",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/Candidates",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Candidate By ID": {
          "scope": "ZohoRecruit.modules.READ",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/Candidates/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Candidate": {
          "scope": "ZohoRecruit.modules.CREATE",
          "method": "POST",
          "url": "https://recruit.zoho.com/recruit/v2/Candidates",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "First_Name": "Jane",
                "Last_Name": "Smith",
                "Email": "jane.smith@example.com",
                "Phone": "1234567890",
                "Experience_in_Years": 5,
                "Current_Job_Title": "Senior Developer",
                "Current_Employer": "Tech Corp",
                "Skill_Set": "Python, JavaScript, React"
              }
            ]
          }
        },
        "Update Candidate": {
          "scope": "ZohoRecruit.modules.UPDATE",
          "method": "PUT",
          "url": "https://recruit.zoho.com/recruit/v2/Candidates/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "id": "{record_id}",
                "Candidate_Status": "Active"
              }
            ]
          }
        },
        "Delete Candidate": {
          "scope": "ZohoRecruit.modules.DELETE",
          "method": "DELETE",
          "url": "https://recruit.zoho.com/recruit/v2/Candidates/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Search Candidates": {
          "scope": "ZohoRecruit.modules.READ",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/Candidates/search",
          "params": {
            "criteria": "(Candidate_Status:equals:Active)"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Upload Resume": {
          "scope": "ZohoRecruit.modules.CREATE",
          "method": "POST",
          "url": "https://recruit.zoho.com/recruit/v2/Candidates/{record_id}/Attachments",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Candidate Attachments": {
          "scope": "ZohoRecruit.modules.READ",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/Candidates/{record_id}/Attachments",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Applications": {
          "scope": "ZohoRecruit.modules.READ",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/Applications",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Application": {
          "scope": "ZohoRecruit.modules.CREATE",
          "method": "POST",
          "url": "https://recruit.zoho.com/recruit/v2/Applications",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Candidate_Name": {
                  "name": "Jane Smith",
                  "id": "{candidate_id}"
                },
                "Job_Opening_Name": {
                  "name": "Software Engineer",
                  "id": "{job_id}"
                },
                "Application_Status": "New"
              }
            ]
          }
        },
        "Update Application": {
          "scope": "ZohoRecruit.modules.UPDATE",
          "method": "PUT",
          "url": "https://recruit.zoho.com/recruit/v2/Applications/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "id": "{record_id}",
                "Application_Status": "Interview Scheduled"
              }
            ]
          }
        },
        "Delete Application": {
          "scope": "ZohoRecruit.modules.DELETE",
          "method": "DELETE",
          "url": "https://recruit.zoho.com/recruit/v2/Applications/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Interviews": {
          "scope": "ZohoRecruit.modules.READ",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/Interviews",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Schedule Interview": {
          "scope": "ZohoRecruit.modules.CREATE",
          "method": "POST",
          "url": "https://recruit.zoho.com/recruit/v2/Interviews",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Interview_Name": "Technical Round",
                "Candidate_Name": {
                  "id": "{candidate_id}"
                },
                "Job_Opening_Name": {
                  "id": "{job_id}"
                },
                "Scheduled_On": "2025-06-15T10:00:00+05:30",
                "Duration": "60",
                "Interviewer": "{interviewer_id}",
                "Interview_Type": "In-Person"
              }
            ]
          }
        },
        "Update Interview": {
          "scope": "ZohoRecruit.modules.UPDATE",
          "method": "PUT",
          "url": "https://recruit.zoho.com/recruit/v2/Interviews/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "id": "{record_id}",
                "Interview_Status": "Completed",
                "Interview_Result": "Selected"
              }
            ]
          }
        },
        "Get Recruit Modules": {
          "scope": "ZohoRecruit.settings.READ",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/settings/modules",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Recruit Fields": {
          "scope": "ZohoRecruit.settings.READ",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/settings/fields",
          "params": {
            "module": "Candidates"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Recruit Users": {
          "scope": "ZohoRecruit.users.READ",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/users",
          "params": {
            "type": "ActiveUsers"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Recruit COQL Query": {
          "scope": "ZohoRecruit.modules.READ",
          "method": "POST",
          "url": "https://recruit.zoho.com/recruit/v2/coql",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "select_query": "select Last_Name, Email, Candidate_Status from Candidates limit 200"
          }
        },
        "Get Candidate Notes": {
          "scope": "ZohoRecruit.modules.READ",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/Candidates/{record_id}/Notes",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Candidate Note": {
          "scope": "ZohoRecruit.modules.CREATE",
          "method": "POST",
          "url": "https://recruit.zoho.com/recruit/v2/Notes",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Note_Title": "Interview Feedback",
                "Note_Content": "Strong technical skills. Recommended for next round.",
                "Parent_Id": {
                  "id": "{candidate_id}"
                },
                "$se_module": "Candidates"
              }
            ]
          }
        },
        "Get Candidate Sources": {
          "scope": "ZohoRecruit.settings.READ",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/settings/CandidateSources",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        }
      }
    },
    "campaigns": {
      "scopes": [
        "ZohoCampaigns.contact.ALL",
        "ZohoCampaigns.contact.READ",
        "ZohoCampaigns.contact.CREATE",
        "ZohoCampaigns.contact.DELETE",
        "ZohoCampaigns.campaign.ALL",
        "ZohoCampaigns.campaign.READ",
        "ZohoCampaigns.list.ALL",
        "ZohoCampaigns.list.READ",
        "ZohoCampaigns.list.CREATE",
        "ZohoCampaigns.topic.ALL",
        "ZohoCampaigns.autoresponder.ALL",
        "ZohoCampaigns.email.ALL",
        "ZohoCampaigns.report.READ",
        "ZohoCampaigns.tag.ALL",
        "ZohoCampaigns.segment.ALL",
        "ZohoCampaigns.workflow.ALL",
        "ZohoCampaigns.signup.ALL",
        "ZohoCampaigns.template.ALL"
      ],
      "baseUrl": "https://campaigns.zoho.com/api/v1.1",
      "endpoints": {
        "Get All Lists": {
          "scope": "ZohoCampaigns.contact.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getlistsbytype",
          "params": {
            "resfmt": "JSON",
            "type": "all"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Mailing List": {
          "scope": "ZohoCampaigns.contact.CREATE",
          "method": "POST",
          "url": "https://campaigns.zoho.com/api/v1.1/json/listsubscription",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "listname": "Newsletter Subscribers",
            "signupform": false,
            "description": "Monthly newsletter list"
          }
        },
        "Get List Details": {
          "scope": "ZohoCampaigns.contact.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/json/listsubscription",
          "params": {
            "listkey": "{list_key}",
            "resfmt": "JSON",
            "fromindex": 1,
            "range": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Delete Mailing List": {
          "scope": "ZohoCampaigns.contact.DELETE",
          "method": "DELETE",
          "url": "https://campaigns.zoho.com/api/v1.1/json/listsubscription",
          "params": {
            "listkey": "{list_key}",
            "resfmt": "JSON"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get List Subscribers": {
          "scope": "ZohoCampaigns.contact.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getrecipients",
          "params": {
            "listkey": "{list_key}",
            "resfmt": "JSON",
            "status": "active",
            "fromindex": 1,
            "range": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Contact to List": {
          "scope": "ZohoCampaigns.contact.CREATE",
          "method": "POST",
          "url": "https://campaigns.zoho.com/api/v1.1/json/listsubscription",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "resfmt": "JSON",
            "listkey": "{list_key}",
            "contactinfo": "{\"First Name\":\"John\",\"Last Name\":\"Doe\",\"Email\":\"john@example.com\"}"
          }
        },
        "Add Multiple Contacts": {
          "scope": "ZohoCampaigns.contact.CREATE",
          "method": "POST",
          "url": "https://campaigns.zoho.com/api/v1.1/json/listsubscription",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "resfmt": "JSON",
            "listkey": "{list_key}",
            "contactinfo": "[{\"Email\":\"john@example.com\"},{\"Email\":\"jane@example.com\"}]"
          }
        },
        "Remove Contact from List": {
          "scope": "ZohoCampaigns.contact.UPDATE",
          "method": "POST",
          "url": "https://campaigns.zoho.com/api/v1.1/json/listsubscription",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "resfmt": "JSON",
            "listkey": "{list_key}",
            "emailids": "john@example.com",
            "action": "remove"
          }
        },
        "Unsubscribe Contact": {
          "scope": "ZohoCampaigns.contact.UPDATE",
          "method": "POST",
          "url": "https://campaigns.zoho.com/api/v1.1/json/listsubscription",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "resfmt": "JSON",
            "listkey": "{list_key}",
            "emailids": "john@example.com",
            "action": "unsubscribe"
          }
        },
        "Get Contact Details": {
          "scope": "ZohoCampaigns.contact.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/json/contacts",
          "params": {
            "resfmt": "JSON",
            "contactEmail": "john@example.com"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Update Contact": {
          "scope": "ZohoCampaigns.contact.UPDATE",
          "method": "PUT",
          "url": "https://campaigns.zoho.com/api/v1.1/json/contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "resfmt": "JSON",
            "contactEmail": "john@example.com",
            "contactinfo": "{\"First Name\":\"John Updated\"}"
          }
        },
        "Get Campaigns": {
          "scope": "ZohoCampaigns.campaigns.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getcampaigns",
          "params": {
            "resfmt": "JSON",
            "fromindex": 1,
            "range": 50
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Campaign By ID": {
          "scope": "ZohoCampaigns.campaigns.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getcampaigndetails",
          "params": {
            "resfmt": "JSON",
            "campaignkey": "{campaign_key}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Email Campaign": {
          "scope": "ZohoCampaigns.campaigns.CREATE",
          "method": "POST",
          "url": "https://campaigns.zoho.com/api/v1.1/json/campaigns",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "resfmt": "JSON",
            "campaignname": "Monthly Newsletter",
            "campaigntype": "Email Campaign",
            "fromname": "Acme Corp",
            "fromemailaddress": "newsletter@example.com",
            "replyto": "newsletter@example.com",
            "toall": false,
            "listkey": "{list_key}",
            "subject": "Your Monthly Newsletter",
            "emailcontent": "<h1>Hello Subscribers!</h1>"
          }
        },
        "Send Campaign": {
          "scope": "ZohoCampaigns.campaigns.UPDATE",
          "method": "POST",
          "url": "https://campaigns.zoho.com/api/v1.1/sendcampaign",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "resfmt": "JSON",
            "campaignkey": "{campaign_key}",
            "scheduledtime": "2025-01-15T10:00:00+05:30"
          }
        },
        "Send Test Campaign": {
          "scope": "ZohoCampaigns.campaigns.UPDATE",
          "method": "POST",
          "url": "https://campaigns.zoho.com/api/v1.1/sendtestcampaign",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "resfmt": "JSON",
            "campaignkey": "{campaign_key}",
            "testaddress": "test@example.com"
          }
        },
        "Get Campaign Reports": {
          "scope": "ZohoCampaigns.campaigns.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getreportbydate",
          "params": {
            "resfmt": "JSON",
            "campaignkey": "{campaign_key}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Campaign Opens": {
          "scope": "ZohoCampaigns.campaigns.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getopeners",
          "params": {
            "resfmt": "JSON",
            "campaignkey": "{campaign_key}",
            "fromindex": 1,
            "range": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Campaign Clicks": {
          "scope": "ZohoCampaigns.campaigns.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getclickers",
          "params": {
            "resfmt": "JSON",
            "campaignkey": "{campaign_key}",
            "fromindex": 1,
            "range": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Campaign Bounces": {
          "scope": "ZohoCampaigns.campaigns.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getbouncers",
          "params": {
            "resfmt": "JSON",
            "campaignkey": "{campaign_key}",
            "fromindex": 1,
            "range": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Campaign Unsubscribes": {
          "scope": "ZohoCampaigns.campaigns.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getunsubscribers",
          "params": {
            "resfmt": "JSON",
            "campaignkey": "{campaign_key}",
            "fromindex": 1,
            "range": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Clone Campaign": {
          "scope": "ZohoCampaigns.campaigns.CREATE",
          "method": "POST",
          "url": "https://campaigns.zoho.com/api/v1.1/clonecampaign",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "resfmt": "JSON",
            "campaignkey": "{campaign_key}",
            "campaignname": "Cloned Campaign"
          }
        },
        "Delete Campaign": {
          "scope": "ZohoCampaigns.campaigns.DELETE",
          "method": "DELETE",
          "url": "https://campaigns.zoho.com/api/v1.1/deletecampaign",
          "params": {
            "resfmt": "JSON",
            "campaignkey": "{campaign_key}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Autoresponders": {
          "scope": "ZohoCampaigns.autoresponders.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getautoresponders",
          "params": {
            "resfmt": "JSON"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Autoresponder": {
          "scope": "ZohoCampaigns.autoresponders.CREATE",
          "method": "POST",
          "url": "https://campaigns.zoho.com/api/v1.1/json/autoresponders",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "resfmt": "JSON",
            "autorespname": "Welcome Series",
            "trigger": "signup",
            "listkey": "{list_key}"
          }
        },
        "Get Segments": {
          "scope": "ZohoCampaigns.contact.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getsegments",
          "params": {
            "resfmt": "JSON",
            "listkey": "{list_key}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Topics": {
          "scope": "ZohoCampaigns.contact.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/gettopics",
          "params": {
            "resfmt": "JSON"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Email Templates": {
          "scope": "ZohoCampaigns.campaigns.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/gettemplates",
          "params": {
            "resfmt": "JSON",
            "fromindex": 1,
            "range": 50
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        }
      }
    },
    "inventory": {
      "scopes": [
        "ZohoInventory.fullaccess.all",
        "ZohoInventory.contacts.READ",
        "ZohoInventory.contacts.CREATE",
        "ZohoInventory.items.READ",
        "ZohoInventory.items.CREATE",
        "ZohoInventory.items.UPDATE",
        "ZohoInventory.items.DELETE",
        "ZohoInventory.invoices.READ",
        "ZohoInventory.invoices.CREATE",
        "ZohoInventory.salesorders.READ",
        "ZohoInventory.salesorders.CREATE",
        "ZohoInventory.purchaseorders.READ",
        "ZohoInventory.purchaseorders.CREATE",
        "ZohoInventory.bills.READ",
        "ZohoInventory.bills.CREATE",
        "ZohoInventory.warehouses.READ",
        "ZohoInventory.packages.ALL",
        "ZohoInventory.packages.CREATE",
        "ZohoInventory.shipments.ALL",
        "ZohoInventory.shipments.CREATE",
        "ZohoInventory.reports.READ"
      ],
      "baseUrl": "https://www.zohoapis.com/inventory/v1",
      "endpoints": {
        "Get Items": {
          "scope": "ZohoInventory.items.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/items?organization_id={organization_id}",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Item By ID": {
          "scope": "ZohoInventory.items.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/items/{item_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Item": {
          "scope": "ZohoInventory.items.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/items?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Widget Pro",
            "rate": 99.99,
            "description": "Our flagship product",
            "sku": "WGT-PRO-001",
            "unit": "pcs",
            "item_type": "inventory",
            "purchase_rate": 49.99,
            "initial_stock": 100,
            "initial_stock_rate": 49.99
          }
        },
        "Update Item": {
          "scope": "ZohoInventory.items.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/inventory/v1/items/{item_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "rate": 119.99,
            "description": "Updated description"
          }
        },
        "Delete Item": {
          "scope": "ZohoInventory.items.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/inventory/v1/items/{item_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Mark Item Active": {
          "scope": "ZohoInventory.items.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/items/{item_id}/active?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Mark Item Inactive": {
          "scope": "ZohoInventory.items.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/items/{item_id}/inactive?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Item Groups": {
          "scope": "ZohoInventory.items.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/itemgroups?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Item Group": {
          "scope": "ZohoInventory.items.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/itemgroups?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Electronics",
            "description": "Electronic products"
          }
        },
        "Get Contacts (Inventory)": {
          "scope": "ZohoInventory.contacts.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/contacts?organization_id={organization_id}",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Contact By ID (Inventory)": {
          "scope": "ZohoInventory.contacts.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/contacts/{contact_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Contact (Inventory)": {
          "scope": "ZohoInventory.contacts.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/contacts?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "contact_name": "Acme Corp",
            "contact_type": "customer",
            "currency_id": "{currency_id}",
            "billing_address": {
              "address": "123 Main St",
              "city": "New York",
              "state": "NY",
              "country": "USA"
            }
          }
        },
        "Update Contact (Inventory)": {
          "scope": "ZohoInventory.contacts.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/inventory/v1/contacts/{contact_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "contact_name": "Acme Corp Updated"
          }
        },
        "Delete Contact (Inventory)": {
          "scope": "ZohoInventory.contacts.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/inventory/v1/contacts/{contact_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Sales Orders (Inv)": {
          "scope": "ZohoInventory.salesorders.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/salesorders?organization_id={organization_id}",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Sales Order (Inv)": {
          "scope": "ZohoInventory.salesorders.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/salesorders?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "customer_id": "{customer_id}",
            "date": "2025-12-31",
            "line_items": [
              {
                "item_id": "{item_id}",
                "quantity": 10,
                "rate": 99.99
              }
            ],
            "delivery_date": "2026-01-15"
          }
        },
        "Update Sales Order (Inv)": {
          "scope": "ZohoInventory.salesorders.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/inventory/v1/salesorders/{so_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "notes": "Updated"
          }
        },
        "Delete Sales Order (Inv)": {
          "scope": "ZohoInventory.salesorders.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/inventory/v1/salesorders/{so_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Mark SO Confirmed": {
          "scope": "ZohoInventory.salesorders.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/salesorders/{so_id}/confirm?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Purchase Orders (Inv)": {
          "scope": "ZohoInventory.purchaseorders.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/purchaseorders?organization_id={organization_id}",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Purchase Order (Inv)": {
          "scope": "ZohoInventory.purchaseorders.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/purchaseorders?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "vendor_id": "{vendor_id}",
            "date": "2025-12-31",
            "line_items": [
              {
                "item_id": "{item_id}",
                "quantity": 100,
                "rate": 49.99
              }
            ],
            "delivery_date": "2026-01-15"
          }
        },
        "Update Purchase Order (Inv)": {
          "scope": "ZohoInventory.purchaseorders.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/inventory/v1/purchaseorders/{po_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "notes": "Updated"
          }
        },
        "Delete Purchase Order (Inv)": {
          "scope": "ZohoInventory.purchaseorders.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/inventory/v1/purchaseorders/{po_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Mark PO Confirmed": {
          "scope": "ZohoInventory.purchaseorders.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/purchaseorders/{po_id}/confirmed?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Invoices (Inv)": {
          "scope": "ZohoInventory.invoices.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/invoices?organization_id={organization_id}",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Invoice (Inv)": {
          "scope": "ZohoInventory.invoices.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/invoices?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "customer_id": "{customer_id}",
            "date": "2025-12-31",
            "line_items": [
              {
                "item_id": "{item_id}",
                "quantity": 10,
                "rate": 99.99
              }
            ]
          }
        },
        "Update Invoice (Inv)": {
          "scope": "ZohoInventory.invoices.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/inventory/v1/invoices/{invoice_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "notes": "Payment due in 15 days"
          }
        },
        "Delete Invoice (Inv)": {
          "scope": "ZohoInventory.invoices.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/inventory/v1/invoices/{invoice_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Email Invoice (Inv)": {
          "scope": "ZohoInventory.invoices.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/invoices/{invoice_id}/email?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "to_mail_ids": [
              "customer@example.com"
            ],
            "subject": "Invoice from Acme"
          }
        },
        "Get Bills (Inv)": {
          "scope": "ZohoInventory.bills.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/bills?organization_id={organization_id}",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Bill (Inv)": {
          "scope": "ZohoInventory.bills.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/bills?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "vendor_id": "{vendor_id}",
            "date": "2025-12-31",
            "line_items": [
              {
                "account_id": "{account_id}",
                "rate": 500,
                "quantity": 1
              }
            ]
          }
        },
        "Update Bill (Inv)": {
          "scope": "ZohoInventory.bills.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/inventory/v1/bills/{bill_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "notes": "Updated"
          }
        },
        "Delete Bill (Inv)": {
          "scope": "ZohoInventory.bills.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/inventory/v1/bills/{bill_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Warehouses": {
          "scope": "ZohoInventory.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/warehouses?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Warehouse": {
          "scope": "ZohoInventory.settings.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/warehouses?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "warehouse_name": "Main Warehouse",
            "address": {
              "address": "123 Warehouse Rd",
              "city": "Chicago",
              "state": "IL",
              "country": "USA",
              "zip": "60601"
            }
          }
        },
        "Update Warehouse": {
          "scope": "ZohoInventory.settings.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/inventory/v1/warehouses/{warehouse_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "warehouse_name": "Main Warehouse Updated"
          }
        },
        "Delete Warehouse": {
          "scope": "ZohoInventory.settings.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/inventory/v1/warehouses/{warehouse_id}?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Shipments": {
          "scope": "ZohoInventory.shipmentorders.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/shipmentorders?organization_id={organization_id}",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Shipment": {
          "scope": "ZohoInventory.shipmentorders.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/shipmentorders?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "salesorder_id": "{so_id}",
            "date": "2025-12-31",
            "delivery_method": "FedEx",
            "tracking_number": "FX123456789",
            "carrier": "FedEx"
          }
        },
        "Get Packages": {
          "scope": "ZohoInventory.shipmentorders.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/packages?organization_id={organization_id}",
          "params": {
            "salesorder_id": "{so_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Package": {
          "scope": "ZohoInventory.shipmentorders.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/packages?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "salesorder_id": "{so_id}",
            "date": "2025-12-31",
            "line_items": [
              {
                "so_line_item_id": "{line_item_id}",
                "quantity": 10
              }
            ]
          }
        },
        "Get Inventory Adjustments": {
          "scope": "ZohoInventory.items.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/inventoryadjustments?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Inventory Adjustment": {
          "scope": "ZohoInventory.items.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/inventoryadjustments?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "date": "2025-12-31",
            "reason": "Physical stock count",
            "line_items": [
              {
                "item_id": "{item_id}",
                "quantity_adjusted": 10,
                "warehouse_id": "{warehouse_id}"
              }
            ]
          }
        },
        "Get Price Lists": {
          "scope": "ZohoInventory.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/pricelists?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Price List": {
          "scope": "ZohoInventory.settings.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/pricelists?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Wholesale Price",
            "type": "percentage",
            "percentage": 20,
            "rounding": "up"
          }
        },
        "Get Stock Summary": {
          "scope": "ZohoInventory.reports.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/reports/inventorysummary?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Inventory Valuation": {
          "scope": "ZohoInventory.reports.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/reports/inventoryvaluation?organization_id={organization_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Inventory Organizations": {
          "scope": "ZohoInventory.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/organizations",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        }
      }
    },
    "analytics": {
      "scopes": [
        "ZohoAnalytics.fullaccess.all",
        "ZohoAnalytics.data.READ",
        "ZohoAnalytics.data.CREATE",
        "ZohoAnalytics.data.UPDATE",
        "ZohoAnalytics.data.DELETE",
        "ZohoAnalytics.report.READ",
        "ZohoAnalytics.report.CREATE",
        "ZohoAnalytics.workspace.READ",
        "ZohoAnalytics.workspace.CREATE",
        "ZohoAnalytics.share.READ",
        "ZohoAnalytics.usermanagement.READ",
        "ZohoAnalytics.embeddedanalytics.READ",
        "ZohoAnalytics.datasource.READ"
      ],
      "baseUrl": "https://analyticsapi.zoho.com/api/v2",
      "endpoints": {
        "Get Workspaces": {
          "scope": "ZohoAnalytics.modeling.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Workspace By ID": {
          "scope": "ZohoAnalytics.modeling.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Workspace": {
          "scope": "ZohoAnalytics.modeling.CREATE",
          "method": "POST",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "workspaceName": "Sales Analytics",
            "description": "Sales data analysis workspace"
          }
        },
        "Get Views": {
          "scope": "ZohoAnalytics.modeling.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/views",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Tables": {
          "scope": "ZohoAnalytics.modeling.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/tables",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Table Data": {
          "scope": "ZohoAnalytics.data.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/tables/{table_id}/data",
          "params": {
            "pageindex": 1,
            "rowlimit": 1000
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Import Data": {
          "scope": "ZohoAnalytics.data.CREATE",
          "method": "POST",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/tables/{table_id}/import",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "importType": "APPEND",
            "autoIdentify": "true",
            "onError": "SETCOLUMNEMPTY"
          }
        },
        "Add Row": {
          "scope": "ZohoAnalytics.data.CREATE",
          "method": "POST",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/tables/{table_id}/rows",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "columns": {
              "Column1": "Value1",
              "Column2": "Value2"
            }
          }
        },
        "Update Row": {
          "scope": "ZohoAnalytics.data.UPDATE",
          "method": "PUT",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/tables/{table_id}/rows",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "columns": {
              "Column1": "Updated Value"
            },
            "criteria": "(\"Column1\"='Value1')"
          }
        },
        "Delete Rows": {
          "scope": "ZohoAnalytics.data.DELETE",
          "method": "DELETE",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/tables/{table_id}/rows",
          "params": {
            "criteria": "(\"Column1\"='Value1')"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Reports": {
          "scope": "ZohoAnalytics.modeling.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/reports",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Report Data": {
          "scope": "ZohoAnalytics.data.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/reports/{report_id}/data",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Export Report": {
          "scope": "ZohoAnalytics.data.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/reports/{report_id}/export",
          "params": {
            "format": "CSV"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Dashboards": {
          "scope": "ZohoAnalytics.modeling.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/dashboards",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Copy View": {
          "scope": "ZohoAnalytics.modeling.CREATE",
          "method": "POST",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/views/{view_id}/copy",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "workspaceId": "{target_workspace_id}"
          }
        },
        "Share View": {
          "scope": "ZohoAnalytics.modeling.UPDATE",
          "method": "POST",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/views/{view_id}/share",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "emailIds": [
              "user@example.com"
            ],
            "permissions": [
              "EXPORT",
              "EMBED"
            ]
          }
        },
        "Get Shared Views": {
          "scope": "ZohoAnalytics.modeling.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/sharedviews",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Folders": {
          "scope": "ZohoAnalytics.modeling.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/folders",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Organization Users": {
          "scope": "ZohoAnalytics.usermanagement.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/users",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add User": {
          "scope": "ZohoAnalytics.usermanagement.CREATE",
          "method": "POST",
          "url": "https://analyticsapi.zoho.com/api/v2/users",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "emailId": "user@example.com",
            "role": "Viewer"
          }
        },
        "Get Usage": {
          "scope": "ZohoAnalytics.usermanagement.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/usage",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Delete View": {
          "scope": "ZohoAnalytics.modeling.DELETE",
          "method": "DELETE",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/views/{view_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Run Query Table": {
          "scope": "ZohoAnalytics.modeling.CREATE",
          "method": "POST",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/querytables",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "tableName": "Sales Analysis",
            "sqlQuery": "SELECT Month, SUM(Revenue) as Total FROM Sales GROUP BY Month"
          }
        }
      }
    },
    "sign": {
      "scopes": [
        "ZohoSign.documents.ALL",
        "ZohoSign.documents.READ",
        "ZohoSign.documents.CREATE",
        "ZohoSign.documents.UPDATE",
        "ZohoSign.documents.DELETE",
        "ZohoSign.templates.ALL",
        "ZohoSign.templates.READ",
        "ZohoSign.templates.CREATE",
        "ZohoSign.contacts.ALL",
        "ZohoSign.settings.ALL",
        "ZohoSign.reports.READ",
        "ZohoSign.bulksend.ALL"
      ],
      "baseUrl": "https://sign.zoho.com/api/v1",
      "endpoints": {
        "Get Templates": {
          "scope": "ZohoSign.templates.READ",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/templates",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Template By ID": {
          "scope": "ZohoSign.templates.READ",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/templates/{template_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Template": {
          "scope": "ZohoSign.templates.CREATE",
          "method": "POST",
          "url": "https://sign.zoho.com/api/v1/templates",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Update Template": {
          "scope": "ZohoSign.templates.UPDATE",
          "method": "PUT",
          "url": "https://sign.zoho.com/api/v1/templates/{template_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Delete Template": {
          "scope": "ZohoSign.templates.DELETE",
          "method": "DELETE",
          "url": "https://sign.zoho.com/api/v1/templates/{template_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Requests": {
          "scope": "ZohoSign.documents.READ",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/requests",
          "params": {
            "page": 1,
            "page_size": 100
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Request By ID": {
          "scope": "ZohoSign.documents.READ",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/requests/{request_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Signature Request": {
          "scope": "ZohoSign.documents.CREATE",
          "method": "POST",
          "url": "https://sign.zoho.com/api/v1/requests",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "requests": {
              "request_name": "Contract Agreement",
              "expiration_days": 30,
              "is_sequential": true,
              "actions": [
                {
                  "action_type": "SIGN",
                  "recipient_name": "John Doe",
                  "recipient_email": "john@example.com",
                  "signing_order": 1
                }
              ]
            }
          }
        },
        "Send Signature Request": {
          "scope": "ZohoSign.documents.UPDATE",
          "method": "POST",
          "url": "https://sign.zoho.com/api/v1/requests/{request_id}/submittosign",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Recall Request": {
          "scope": "ZohoSign.documents.UPDATE",
          "method": "POST",
          "url": "https://sign.zoho.com/api/v1/requests/{request_id}/recall",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Delete Request": {
          "scope": "ZohoSign.documents.DELETE",
          "method": "DELETE",
          "url": "https://sign.zoho.com/api/v1/requests/{request_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Download Document": {
          "scope": "ZohoSign.documents.READ",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/requests/{request_id}/pdf",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Download Audit Trail": {
          "scope": "ZohoSign.documents.READ",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/requests/{request_id}/audittrail",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Document Fields": {
          "scope": "ZohoSign.documents.READ",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/requests/{request_id}/fields",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Send Reminder": {
          "scope": "ZohoSign.documents.UPDATE",
          "method": "POST",
          "url": "https://sign.zoho.com/api/v1/requests/{request_id}/remind",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "recipients": [
              {
                "recipient_email": "john@example.com"
              }
            ]
          }
        },
        "Add Document to Request": {
          "scope": "ZohoSign.documents.CREATE",
          "method": "POST",
          "url": "https://sign.zoho.com/api/v1/requests/{request_id}/documents",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Completed Document": {
          "scope": "ZohoSign.documents.READ",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/requests/{request_id}/completeddocument",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Request from Template": {
          "scope": "ZohoSign.documents.CREATE",
          "method": "POST",
          "url": "https://sign.zoho.com/api/v1/templates/{template_id}/createdocument",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "templates": {
              "field_data": {
                "field_text_data": {
                  "field_name": "field_value"
                }
              },
              "actions": [
                {
                  "action_type": "SIGN",
                  "recipient_name": "John Doe",
                  "recipient_email": "john@example.com"
                }
              ]
            }
          }
        },
        "Get Prefill Fields": {
          "scope": "ZohoSign.templates.READ",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/templates/{template_id}/prefillfields",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Bulk Send": {
          "scope": "ZohoSign.documents.CREATE",
          "method": "POST",
          "url": "https://sign.zoho.com/api/v1/requests/bulk",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Request Activity": {
          "scope": "ZohoSign.documents.READ",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/requests/{request_id}/actions/{action_id}/activities",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        }
      }
    },
    "workdrive": {
      "scopes": [
        "WorkDrive.workspace.ALL",
        "WorkDrive.workspace.READ",
        "WorkDrive.workspace.CREATE",
        "WorkDrive.files.ALL",
        "WorkDrive.files.READ",
        "WorkDrive.files.CREATE",
        "WorkDrive.files.UPDATE",
        "WorkDrive.files.DELETE",
        "WorkDrive.links.ALL",
        "WorkDrive.links.CREATE",
        "WorkDrive.links.READ",
        "WorkDrive.users.ALL",
        "WorkDrive.teams.ALL",
        "WorkDrive.teams.READ",
        "WorkDrive.settings.ALL",
        "WorkDrive.labels.ALL",
        "WorkDrive.share.ALL"
      ],
      "baseUrl": "https://workdrive.zoho.com/api/v1",
      "endpoints": {
        "Get Teams": {
          "scope": "WorkDrive.team.READ",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/teams",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Team By ID": {
          "scope": "WorkDrive.team.READ",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/teams/{team_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Team Folders": {
          "scope": "WorkDrive.teamfolders.READ",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/teams/{team_id}/folders",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Folder Info": {
          "scope": "WorkDrive.files.READ",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/folders/{folder_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Folder": {
          "scope": "WorkDrive.files.CREATE",
          "method": "POST",
          "url": "https://workdrive.zoho.com/api/v1/files",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": {
              "attributes": {
                "name": "Project Documents",
                "parent_id": "{parent_folder_id}",
                "type": "folder"
              },
              "type": "files"
            }
          }
        },
        "Rename Folder": {
          "scope": "WorkDrive.files.UPDATE",
          "method": "PATCH",
          "url": "https://workdrive.zoho.com/api/v1/files/{folder_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": {
              "attributes": {
                "name": "Updated Folder Name"
              },
              "type": "files"
            }
          }
        },
        "Delete Folder": {
          "scope": "WorkDrive.files.DELETE",
          "method": "DELETE",
          "url": "https://workdrive.zoho.com/api/v1/files/{folder_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Files in Folder": {
          "scope": "WorkDrive.files.READ",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/files/{folder_id}/files",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Upload File": {
          "scope": "WorkDrive.files.CREATE",
          "method": "POST",
          "url": "https://workdrive.zoho.com/api/v1/upload",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Download File": {
          "scope": "WorkDrive.files.READ",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/files/{file_id}/content",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get File Info": {
          "scope": "WorkDrive.files.READ",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/files/{file_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Rename File": {
          "scope": "WorkDrive.files.UPDATE",
          "method": "PATCH",
          "url": "https://workdrive.zoho.com/api/v1/files/{file_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": {
              "attributes": {
                "name": "New File Name"
              },
              "type": "files"
            }
          }
        },
        "Move File": {
          "scope": "WorkDrive.files.UPDATE",
          "method": "PATCH",
          "url": "https://workdrive.zoho.com/api/v1/files/{file_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": {
              "attributes": {
                "parent_id": "{target_folder_id}"
              },
              "type": "files"
            }
          }
        },
        "Copy File": {
          "scope": "WorkDrive.files.CREATE",
          "method": "POST",
          "url": "https://workdrive.zoho.com/api/v1/files/{file_id}/copy",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": {
              "attributes": {
                "parent_id": "{target_folder_id}"
              },
              "type": "files"
            }
          }
        },
        "Delete File": {
          "scope": "WorkDrive.files.DELETE",
          "method": "DELETE",
          "url": "https://workdrive.zoho.com/api/v1/files/{file_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Share File": {
          "scope": "WorkDrive.files.UPDATE",
          "method": "POST",
          "url": "https://workdrive.zoho.com/api/v1/files/{file_id}/permissions",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": {
              "attributes": {
                "role_id": "48",
                "type": "email",
                "email_id": "user@example.com"
              },
              "type": "permissions"
            }
          }
        },
        "Get File Permissions": {
          "scope": "WorkDrive.files.READ",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/files/{file_id}/permissions",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Search Files": {
          "scope": "WorkDrive.files.READ",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/files",
          "params": {
            "search_term": "report.pdf",
            "type": "files"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get File Versions": {
          "scope": "WorkDrive.files.READ",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/files/{file_id}/versions",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Upload New Version": {
          "scope": "WorkDrive.files.UPDATE",
          "method": "POST",
          "url": "https://workdrive.zoho.com/api/v1/files/{file_id}/versions",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Team Members": {
          "scope": "WorkDrive.workspace.READ",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/teams/{team_id}/members",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Team Member": {
          "scope": "WorkDrive.workspace.UPDATE",
          "method": "POST",
          "url": "https://workdrive.zoho.com/api/v1/teams/{team_id}/members",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": {
              "attributes": {
                "email_id": "user@example.com",
                "role": "31"
              },
              "type": "members"
            }
          }
        },
        "Remove Team Member": {
          "scope": "WorkDrive.workspace.UPDATE",
          "method": "DELETE",
          "url": "https://workdrive.zoho.com/api/v1/teams/{team_id}/members/{member_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Workspaces": {
          "scope": "WorkDrive.workspace.READ",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/teams/{team_id}/workspaces",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Workspace": {
          "scope": "WorkDrive.workspace.CREATE",
          "method": "POST",
          "url": "https://workdrive.zoho.com/api/v1/workspaces",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": {
              "attributes": {
                "name": "Marketing Team",
                "team_id": "{team_id}",
                "description": "Marketing workspace"
              },
              "type": "workspaces"
            }
          }
        }
      }
    },
    "cliq": {
      "scopes": [
        "ZohoCliq.channels.ALL",
        "ZohoCliq.channels.READ",
        "ZohoCliq.channels.CREATE",
        "ZohoCliq.messages.ALL",
        "ZohoCliq.messages.READ",
        "ZohoCliq.messages.CREATE",
        "ZohoCliq.bots.ALL",
        "ZohoCliq.contacts.READ",
        "ZohoCliq.teams.READ",
        "ZohoCliq.files.ALL",
        "ZohoCliq.webhooks.ALL",
        "ZohoCliq.reminders.ALL"
      ],
      "baseUrl": "https://cliq.zoho.com/api/v2",
      "endpoints": {
        "Get Channels": {
          "scope": "ZohoCliq.channels.READ",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/channels",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Channel By ID": {
          "scope": "ZohoCliq.channels.READ",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/channels/{channel_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Channel": {
          "scope": "ZohoCliq.channels.CREATE",
          "method": "POST",
          "url": "https://cliq.zoho.com/api/v2/channels",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "dev-team",
            "description": "Development team channel",
            "type": "private"
          }
        },
        "Update Channel": {
          "scope": "ZohoCliq.channels.UPDATE",
          "method": "PATCH",
          "url": "https://cliq.zoho.com/api/v2/channels/{channel_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "description": "Updated description"
          }
        },
        "Archive Channel": {
          "scope": "ZohoCliq.channels.DELETE",
          "method": "DELETE",
          "url": "https://cliq.zoho.com/api/v2/channels/{channel_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Channel Members": {
          "scope": "ZohoCliq.channels.READ",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/channels/{channel_id}/members",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Channel Member": {
          "scope": "ZohoCliq.channels.UPDATE",
          "method": "POST",
          "url": "https://cliq.zoho.com/api/v2/channels/{channel_id}/members",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "emailids": [
              "user@example.com"
            ]
          }
        },
        "Remove Channel Member": {
          "scope": "ZohoCliq.channels.UPDATE",
          "method": "DELETE",
          "url": "https://cliq.zoho.com/api/v2/channels/{channel_id}/members/{member_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Post Message to Channel": {
          "scope": "ZohoCliq.channels.UPDATE",
          "method": "POST",
          "url": "https://cliq.zoho.com/api/v2/channels/{channel_id}/message",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "text": "Hello team! Meeting at 3 PM today."
          }
        },
        "Post Rich Message to Channel": {
          "scope": "ZohoCliq.channels.UPDATE",
          "method": "POST",
          "url": "https://cliq.zoho.com/api/v2/channels/{channel_id}/message",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "text": "Update:",
            "bot": {
              "name": "Deployment Bot",
              "logo": "https://example.com/bot-logo.png"
            },
            "slides": [
              {
                "type": "text",
                "title": "Deployment Status",
                "data": "Build #123 deployed successfully to production"
              }
            ]
          }
        },
        "Get Channel Messages": {
          "scope": "ZohoCliq.channels.READ",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/channels/{channel_id}/messages",
          "params": {
            "limit": 50
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Direct Messages": {
          "scope": "ZohoCliq.channels.READ",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/directmessages",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Send Direct Message": {
          "scope": "ZohoCliq.channels.UPDATE",
          "method": "POST",
          "url": "https://cliq.zoho.com/api/v2/chat",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "to": [
              "user@example.com"
            ],
            "text": "Hi, can we schedule a call?"
          }
        },
        "Get Bots": {
          "scope": "ZohoCliq.bots.READ",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/bots",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Users": {
          "scope": "ZohoCliq.contacts.READ",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/users",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get User By Email": {
          "scope": "ZohoCliq.contacts.READ",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/users/{email}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Current User": {
          "scope": "ZohoCliq.contacts.READ",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/users/me",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Reminders": {
          "scope": "ZohoCliq.channels.READ",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/reminders",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Reminder": {
          "scope": "ZohoCliq.channels.CREATE",
          "method": "POST",
          "url": "https://cliq.zoho.com/api/v2/reminders",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "text": "Team standup",
            "remind_at": "2025-01-15T09:00:00+05:30",
            "remind_everyone": true
          }
        },
        "Upload Attachment": {
          "scope": "ZohoCliq.channels.UPDATE",
          "method": "POST",
          "url": "https://cliq.zoho.com/api/v2/files",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        }
      }
    },
    "creator": {
      "scopes": [
        "ZohoCreator.report.ALL",
        "ZohoCreator.report.READ",
        "ZohoCreator.report.CREATE",
        "ZohoCreator.report.UPDATE",
        "ZohoCreator.report.DELETE",
        "ZohoCreator.form.ALL",
        "ZohoCreator.form.READ",
        "ZohoCreator.form.CREATE",
        "ZohoCreator.meta.ALL",
        "ZohoCreator.meta.READ"
      ],
      "baseUrl": "https://creator.zoho.com/api/v2",
      "endpoints": {
        "Get Applications": {
          "scope": "ZohoCreator.report.READ",
          "method": "GET",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/applications",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Application Details": {
          "scope": "ZohoCreator.report.READ",
          "method": "GET",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Form Details": {
          "scope": "ZohoCreator.form.READ",
          "method": "GET",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/form/{form_link_name}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Records": {
          "scope": "ZohoCreator.report.READ",
          "method": "GET",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/report/{report_link_name}",
          "params": {
            "from": 0,
            "limit": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Record By ID": {
          "scope": "ZohoCreator.report.READ",
          "method": "GET",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/report/{report_link_name}/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Record": {
          "scope": "ZohoCreator.form.CREATE",
          "method": "POST",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/form/{form_link_name}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": {
              "Name": "John Doe",
              "Email": "john@example.com",
              "Status": "Active"
            }
          }
        },
        "Update Record": {
          "scope": "ZohoCreator.report.UPDATE",
          "method": "PATCH",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/report/{report_link_name}/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": {
              "Status": "Inactive"
            }
          }
        },
        "Update Records (Bulk)": {
          "scope": "ZohoCreator.report.UPDATE",
          "method": "PATCH",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/report/{report_link_name}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "criteria": "Status == \"Pending\"",
            "data": {
              "Status": "Active"
            }
          }
        },
        "Delete Record": {
          "scope": "ZohoCreator.report.DELETE",
          "method": "DELETE",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/report/{report_link_name}/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Delete Records (Bulk)": {
          "scope": "ZohoCreator.report.DELETE",
          "method": "DELETE",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/report/{report_link_name}",
          "params": {
            "criteria": "Status == \"Inactive\""
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Reports": {
          "scope": "ZohoCreator.report.READ",
          "method": "GET",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/reports",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Execute Custom Function": {
          "scope": "ZohoCreator.form.UPDATE",
          "method": "POST",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/form/{form_link_name}/exec_workflow",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "workflow_name": "{workflow_name}",
            "data": {
              "key": "value"
            }
          }
        },
        "Get File Upload": {
          "scope": "ZohoCreator.report.READ",
          "method": "GET",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/report/{report_link_name}/{record_id}/{field_link_name}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Upload File to Field": {
          "scope": "ZohoCreator.report.UPDATE",
          "method": "POST",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/report/{report_link_name}/{record_id}/{field_link_name}/upload",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Pages": {
          "scope": "ZohoCreator.report.READ",
          "method": "GET",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/pages",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Search Records": {
          "scope": "ZohoCreator.report.READ",
          "method": "GET",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/report/{report_link_name}",
          "params": {
            "criteria": "Email == \"john@example.com\""
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        }
      }
    },
    "flow": {
      "scopes": [
        "ZohoFlow.flows.ALL",
        "ZohoFlow.flows.READ",
        "ZohoFlow.flows.CREATE",
        "ZohoFlow.flows.UPDATE",
        "ZohoFlow.flows.DELETE",
        "ZohoFlow.connections.ALL",
        "ZohoFlow.connections.READ",
        "ZohoFlow.dashboards.READ"
      ],
      "baseUrl": "https://flow.zoho.com/api/v1",
      "endpoints": {
        "Get Flows": {
          "scope": "ZohoFlow.flows.READ",
          "method": "GET",
          "url": "https://flow.zoho.com/{{org_id}}/flow/api/v1/flows",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Flow By ID": {
          "scope": "ZohoFlow.flows.READ",
          "method": "GET",
          "url": "https://flow.zoho.com/{{org_id}}/flow/api/v1/flows/{flow_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Enable Flow": {
          "scope": "ZohoFlow.flows.UPDATE",
          "method": "POST",
          "url": "https://flow.zoho.com/{{org_id}}/flow/api/v1/flows/{flow_id}/enable",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Disable Flow": {
          "scope": "ZohoFlow.flows.UPDATE",
          "method": "POST",
          "url": "https://flow.zoho.com/{{org_id}}/flow/api/v1/flows/{flow_id}/disable",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Flow Executions": {
          "scope": "ZohoFlow.flows.READ",
          "method": "GET",
          "url": "https://flow.zoho.com/{{org_id}}/flow/api/v1/flows/{flow_id}/executions",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Execution Details": {
          "scope": "ZohoFlow.flows.READ",
          "method": "GET",
          "url": "https://flow.zoho.com/{{org_id}}/flow/api/v1/flows/{flow_id}/executions/{execution_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Trigger Webhook Flow": {
          "scope": "ZohoFlow.flows.UPDATE",
          "method": "POST",
          "url": "https://flow.zoho.com/webhooks/{webhook_url}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "key": "value",
            "event": "triggered"
          }
        },
        "Get Connections": {
          "scope": "ZohoFlow.flows.READ",
          "method": "GET",
          "url": "https://flow.zoho.com/{{org_id}}/flow/api/v1/connections",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Connection By ID": {
          "scope": "ZohoFlow.flows.READ",
          "method": "GET",
          "url": "https://flow.zoho.com/{{org_id}}/flow/api/v1/connections/{connection_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Apps": {
          "scope": "ZohoFlow.flows.READ",
          "method": "GET",
          "url": "https://flow.zoho.com/{{org_id}}/flow/api/v1/apps",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get App Triggers": {
          "scope": "ZohoFlow.flows.READ",
          "method": "GET",
          "url": "https://flow.zoho.com/{{org_id}}/flow/api/v1/apps/{app_id}/triggers",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get App Actions": {
          "scope": "ZohoFlow.flows.READ",
          "method": "GET",
          "url": "https://flow.zoho.com/{{org_id}}/flow/api/v1/apps/{app_id}/actions",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Flow Logs": {
          "scope": "ZohoFlow.flows.READ",
          "method": "GET",
          "url": "https://flow.zoho.com/{{org_id}}/flow/api/v1/flows/{flow_id}/logs",
          "params": {
            "from": 1,
            "limit": 50
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Clone Flow": {
          "scope": "ZohoFlow.flows.CREATE",
          "method": "POST",
          "url": "https://flow.zoho.com/{{org_id}}/flow/api/v1/flows/{flow_id}/clone",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Cloned Flow"
          }
        }
      }
    },
    "social": {
      "scopes": [
        "ZohoSocial.portals.ALL",
        "ZohoSocial.portals.READ",
        "ZohoSocial.publish.ALL",
        "ZohoSocial.publish.CREATE",
        "ZohoSocial.reports.READ",
        "ZohoSocial.connections.READ",
        "ZohoSocial.monitoring.READ",
        "ZohoSocial.teamfeed.ALL"
      ],
      "baseUrl": "https://social.zoho.com/api/v1",
      "endpoints": {
        "Get Portals": {
          "scope": "ZohoSocial.portals.READ",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/portals",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Social Accounts": {
          "scope": "ZohoSocial.accounts.READ",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/channels",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Posts": {
          "scope": "ZohoSocial.publish.READ",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/posts",
          "params": {
            "limit": 50,
            "from": 0
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Post By ID": {
          "scope": "ZohoSocial.publish.READ",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/posts/{post_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Post": {
          "scope": "ZohoSocial.publish.CREATE",
          "method": "POST",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/posts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "message": "Check out our latest product! #innovation",
            "networks": [
              "facebook",
              "twitter",
              "linkedin"
            ],
            "scheduled_time": "",
            "images": []
          }
        },
        "Schedule Post": {
          "scope": "ZohoSocial.publish.CREATE",
          "method": "POST",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/posts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "message": "Exciting announcement coming tomorrow!",
            "networks": [
              "facebook",
              "twitter"
            ],
            "schedule_time": "2025-12-31T10:00:00+05:30",
            "is_schedule": true
          }
        },
        "Update Post": {
          "scope": "ZohoSocial.publish.UPDATE",
          "method": "PUT",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/posts/{post_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "message": "Updated post content #updated"
          }
        },
        "Delete Post": {
          "scope": "ZohoSocial.publish.DELETE",
          "method": "DELETE",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/posts/{post_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Post Comments": {
          "scope": "ZohoSocial.engage.READ",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/posts/{post_id}/comments",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Reply to Comment": {
          "scope": "ZohoSocial.engage.CREATE",
          "method": "POST",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/posts/{post_id}/comments/{comment_id}/reply",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "message": "Thank you for your comment!"
          }
        },
        "Like Post": {
          "scope": "ZohoSocial.engage.CREATE",
          "method": "POST",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/posts/{post_id}/like",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Followers": {
          "scope": "ZohoSocial.accounts.READ",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/channels/{channel_id}/followers",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Analytics": {
          "scope": "ZohoSocial.reports.READ",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/stats",
          "params": {
            "from_date": "2025-01-01",
            "to_date": "2025-12-31"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Engagement Stats": {
          "scope": "ZohoSocial.reports.READ",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/engagement",
          "params": {
            "from_date": "2025-01-01",
            "to_date": "2025-12-31"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Campaigns (Social)": {
          "scope": "ZohoSocial.publish.READ",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/campaigns",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Campaign (Social)": {
          "scope": "ZohoSocial.publish.CREATE",
          "method": "POST",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/campaigns",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Q4 Campaign",
            "description": "Q4 Social Media Campaign",
            "start_date": "2025-10-01",
            "end_date": "2025-12-31"
          }
        },
        "Get Streams": {
          "scope": "ZohoSocial.monitor.READ",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/streams",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Stream Posts": {
          "scope": "ZohoSocial.monitor.READ",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/streams/{stream_id}/posts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Leads from Social": {
          "scope": "ZohoSocial.engage.READ",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/portals/{portal_id}/leads",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        }
      }
    },
    "survey": {
      "scopes": [
        "ZohoSurvey.surveys.ALL",
        "ZohoSurvey.surveys.READ",
        "ZohoSurvey.surveys.CREATE",
        "ZohoSurvey.responses.READ",
        "ZohoSurvey.reports.READ",
        "ZohoSurvey.contacts.ALL",
        "ZohoSurvey.collectors.ALL",
        "ZohoSurvey.collectors.READ",
        "ZohoSurvey.templates.READ"
      ],
      "baseUrl": "https://survey.zoho.com/api/v1",
      "endpoints": {
        "Get Surveys": {
          "scope": "ZohoSurvey.surveys.READ",
          "method": "GET",
          "url": "https://survey.zoho.com/api/v1/surveys",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Survey By ID": {
          "scope": "ZohoSurvey.surveys.READ",
          "method": "GET",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Survey": {
          "scope": "ZohoSurvey.surveys.CREATE",
          "method": "POST",
          "url": "https://survey.zoho.com/api/v1/surveys",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "surveyname": "Customer Satisfaction Survey",
            "language": "en",
            "emailnotification": true
          }
        },
        "Update Survey": {
          "scope": "ZohoSurvey.surveys.UPDATE",
          "method": "PUT",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "surveyname": "Updated Survey Name"
          }
        },
        "Delete Survey": {
          "scope": "ZohoSurvey.surveys.DELETE",
          "method": "DELETE",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Survey Questions": {
          "scope": "ZohoSurvey.surveys.READ",
          "method": "GET",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}/questions",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Question": {
          "scope": "ZohoSurvey.surveys.UPDATE",
          "method": "POST",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}/questions",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "questiontext": "How satisfied are you with our service?",
            "questiontype": "Rating",
            "required": true
          }
        },
        "Get Responses": {
          "scope": "ZohoSurvey.surveys.READ",
          "method": "GET",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}/responses",
          "params": {
            "from": 0,
            "limit": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Response By ID": {
          "scope": "ZohoSurvey.surveys.READ",
          "method": "GET",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}/responses/{response_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Response Summary": {
          "scope": "ZohoSurvey.surveys.READ",
          "method": "GET",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}/responsesummary",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Survey Reports": {
          "scope": "ZohoSurvey.surveys.READ",
          "method": "GET",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}/reports",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Share Survey": {
          "scope": "ZohoSurvey.surveys.UPDATE",
          "method": "POST",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}/share",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "emailids": [
              "user@example.com"
            ],
            "subject": "We'd love your feedback",
            "message": "Please take a moment to complete our survey"
          }
        },
        "Embed Survey": {
          "scope": "ZohoSurvey.surveys.READ",
          "method": "GET",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}/embedcode",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Survey Collectors": {
          "scope": "ZohoSurvey.surveys.READ",
          "method": "GET",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}/collectors",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Email Collector": {
          "scope": "ZohoSurvey.surveys.CREATE",
          "method": "POST",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}/collectors",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "collectortype": "email",
            "collectorname": "Email Collector"
          }
        },
        "Export Responses": {
          "scope": "ZohoSurvey.surveys.READ",
          "method": "GET",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}/responses/export",
          "params": {
            "format": "csv"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Close Survey": {
          "scope": "ZohoSurvey.surveys.UPDATE",
          "method": "PUT",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "status": "closed"
          }
        },
        "Clone Survey": {
          "scope": "ZohoSurvey.surveys.CREATE",
          "method": "POST",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}/clone",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "surveyname": "Clone of Original Survey"
          }
        }
      }
    },
    "expense": {
      "scopes": [
        "ZohoExpense.fullaccess.all",
        "ZohoExpense.expense.READ",
        "ZohoExpense.expense.CREATE",
        "ZohoExpense.expense.UPDATE",
        "ZohoExpense.expense.DELETE",
        "ZohoExpense.reports.READ",
        "ZohoExpense.reports.CREATE",
        "ZohoExpense.reports.UPDATE",
        "ZohoExpense.trips.ALL",
        "ZohoExpense.trips.READ",
        "ZohoExpense.advances.ALL",
        "ZohoExpense.settings.READ",
        "ZohoExpense.users.READ"
      ],
      "baseUrl": "https://expense.zoho.com/api/v1",
      "endpoints": {
        "Get Expense Reports": {
          "scope": "ZohoExpense.expensereports.READ",
          "method": "GET",
          "url": "https://expense.zoho.com/api/v1/expensereports",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Expense Report By ID": {
          "scope": "ZohoExpense.expensereports.READ",
          "method": "GET",
          "url": "https://expense.zoho.com/api/v1/expensereports/{report_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Expense Report": {
          "scope": "ZohoExpense.expensereports.CREATE",
          "method": "POST",
          "url": "https://expense.zoho.com/api/v1/expensereports",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "report_name": "Q4 Business Trip",
            "report_number": "ER-001",
            "from_date": "2025-10-01",
            "to_date": "2025-10-05",
            "purpose": "Client visits"
          }
        },
        "Update Expense Report": {
          "scope": "ZohoExpense.expensereports.UPDATE",
          "method": "PUT",
          "url": "https://expense.zoho.com/api/v1/expensereports/{report_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "report_name": "Q4 Business Trip Updated"
          }
        },
        "Delete Expense Report": {
          "scope": "ZohoExpense.expensereports.DELETE",
          "method": "DELETE",
          "url": "https://expense.zoho.com/api/v1/expensereports/{report_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Submit Expense Report": {
          "scope": "ZohoExpense.expensereports.UPDATE",
          "method": "POST",
          "url": "https://expense.zoho.com/api/v1/expensereports/{report_id}/submit",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Approve Expense Report": {
          "scope": "ZohoExpense.expensereports.UPDATE",
          "method": "POST",
          "url": "https://expense.zoho.com/api/v1/expensereports/{report_id}/approve",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Reject Expense Report": {
          "scope": "ZohoExpense.expensereports.UPDATE",
          "method": "POST",
          "url": "https://expense.zoho.com/api/v1/expensereports/{report_id}/reject",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "comments": "Receipts missing for hotel expenses"
          }
        },
        "Get Expenses": {
          "scope": "ZohoExpense.expenses.READ",
          "method": "GET",
          "url": "https://expense.zoho.com/api/v1/expenses",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Expense By ID": {
          "scope": "ZohoExpense.expenses.READ",
          "method": "GET",
          "url": "https://expense.zoho.com/api/v1/expenses/{expense_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Expense": {
          "scope": "ZohoExpense.expenses.CREATE",
          "method": "POST",
          "url": "https://expense.zoho.com/api/v1/expenses",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "expense_type_id": "{expense_type_id}",
            "date": "2025-10-01",
            "amount": 150,
            "currency_id": "{currency_id}",
            "paid_by_user": true,
            "description": "Taxi to airport",
            "report_id": "{report_id}"
          }
        },
        "Update Expense": {
          "scope": "ZohoExpense.expenses.UPDATE",
          "method": "PUT",
          "url": "https://expense.zoho.com/api/v1/expenses/{expense_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "amount": 175,
            "description": "Taxi and tips to airport"
          }
        },
        "Delete Expense": {
          "scope": "ZohoExpense.expenses.DELETE",
          "method": "DELETE",
          "url": "https://expense.zoho.com/api/v1/expenses/{expense_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Upload Expense Receipt": {
          "scope": "ZohoExpense.expenses.CREATE",
          "method": "POST",
          "url": "https://expense.zoho.com/api/v1/expenses/{expense_id}/receipt",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Expense Types": {
          "scope": "ZohoExpense.settings.READ",
          "method": "GET",
          "url": "https://expense.zoho.com/api/v1/expensetypes",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Trips": {
          "scope": "ZohoExpense.trips.READ",
          "method": "GET",
          "url": "https://expense.zoho.com/api/v1/trips",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Trip": {
          "scope": "ZohoExpense.trips.CREATE",
          "method": "POST",
          "url": "https://expense.zoho.com/api/v1/trips",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "trip_name": "NYC Business Trip",
            "from_date": "2025-10-01",
            "to_date": "2025-10-05",
            "destination": "New York",
            "purpose": "Client meetings"
          }
        },
        "Approve Trip": {
          "scope": "ZohoExpense.trips.UPDATE",
          "method": "POST",
          "url": "https://expense.zoho.com/api/v1/trips/{trip_id}/approve",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Projects (Expense)": {
          "scope": "ZohoExpense.settings.READ",
          "method": "GET",
          "url": "https://expense.zoho.com/api/v1/projects",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Advances": {
          "scope": "ZohoExpense.advances.READ",
          "method": "GET",
          "url": "https://expense.zoho.com/api/v1/advances",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Advance": {
          "scope": "ZohoExpense.advances.CREATE",
          "method": "POST",
          "url": "https://expense.zoho.com/api/v1/advances",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "amount": 1000,
            "currency_id": "{currency_id}",
            "description": "Advance for business trip"
          }
        },
        "Get Expense Analytics": {
          "scope": "ZohoExpense.reports.READ",
          "method": "GET",
          "url": "https://expense.zoho.com/api/v1/reports/analytics",
          "params": {
            "from_date": "2025-01-01",
            "to_date": "2025-12-31",
            "group_by": "expense_type"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        }
      }
    },
    "subscriptions": {
      "scopes": [
        "ZohoSubscriptions.fullaccess.all",
        "ZohoSubscriptions.customers.READ",
        "ZohoSubscriptions.customers.CREATE",
        "ZohoSubscriptions.subscriptions.READ",
        "ZohoSubscriptions.subscriptions.CREATE",
        "ZohoSubscriptions.subscriptions.UPDATE",
        "ZohoSubscriptions.invoices.READ",
        "ZohoSubscriptions.plans.READ",
        "ZohoSubscriptions.plans.CREATE",
        "ZohoSubscriptions.addons.ALL",
        "ZohoSubscriptions.coupons.ALL",
        "ZohoSubscriptions.payments.READ",
        "ZohoSubscriptions.creditnotes.ALL",
        "ZohoSubscriptions.products.ALL",
        "ZohoSubscriptions.reports.READ",
        "ZohoSubscriptions.settings.READ"
      ],
      "baseUrl": "https://www.zohoapis.com/billing/v1",
      "endpoints": {
        "Get Customers": {
          "scope": "ZohoSubscriptions.customers.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/customers",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Customer By ID": {
          "scope": "ZohoSubscriptions.customers.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/customers/{customer_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Customer": {
          "scope": "ZohoSubscriptions.customers.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/billing/v1/customers",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "display_name": "Acme Corp",
            "email": "billing@acme.com",
            "currency_code": "USD",
            "billing_address": {
              "street": "123 Main St",
              "city": "New York",
              "state": "NY",
              "country": "US",
              "zip": "10001"
            }
          }
        },
        "Update Customer": {
          "scope": "ZohoSubscriptions.customers.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/billing/v1/customers/{customer_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "display_name": "Acme Corp Updated"
          }
        },
        "Delete Customer": {
          "scope": "ZohoSubscriptions.customers.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/billing/v1/customers/{customer_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Subscriptions": {
          "scope": "ZohoSubscriptions.subscriptions.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/subscriptions",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Subscription By ID": {
          "scope": "ZohoSubscriptions.subscriptions.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/subscriptions/{subscription_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Subscription": {
          "scope": "ZohoSubscriptions.subscriptions.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/billing/v1/subscriptions",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "customer_id": "{customer_id}",
            "plan": {
              "plan_code": "pro-monthly"
            },
            "addons": [
              {
                "addon_code": "storage-10gb"
              }
            ],
            "auto_collect": true
          }
        },
        "Update Subscription": {
          "scope": "ZohoSubscriptions.subscriptions.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/billing/v1/subscriptions/{subscription_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "plan": {
              "plan_code": "pro-yearly"
            }
          }
        },
        "Cancel Subscription": {
          "scope": "ZohoSubscriptions.subscriptions.DELETE",
          "method": "POST",
          "url": "https://www.zohoapis.com/billing/v1/subscriptions/{subscription_id}/cancel",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "cancel_at_end": true
          }
        },
        "Reactivate Subscription": {
          "scope": "ZohoSubscriptions.subscriptions.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/billing/v1/subscriptions/{subscription_id}/reactivate",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Addon": {
          "scope": "ZohoSubscriptions.subscriptions.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/billing/v1/subscriptions/{subscription_id}/addons",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "addons": [
              {
                "addon_code": "extra-users",
                "quantity": 5
              }
            ]
          }
        },
        "Remove Addon": {
          "scope": "ZohoSubscriptions.subscriptions.UPDATE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/billing/v1/subscriptions/{subscription_id}/addons/{addon_code}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Plans": {
          "scope": "ZohoSubscriptions.plans.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/plans",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Plan By ID": {
          "scope": "ZohoSubscriptions.plans.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/plans/{plan_code}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Plan": {
          "scope": "ZohoSubscriptions.plans.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/billing/v1/plans",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "plan_code": "pro-monthly",
            "name": "Pro Monthly",
            "recurring_price": 99.99,
            "interval": 1,
            "interval_unit": "months",
            "billing_cycles": -1,
            "trial_period": 14
          }
        },
        "Update Plan": {
          "scope": "ZohoSubscriptions.plans.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/billing/v1/plans/{plan_code}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "recurring_price": 119.99
          }
        },
        "Delete Plan": {
          "scope": "ZohoSubscriptions.plans.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/billing/v1/plans/{plan_code}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Addons": {
          "scope": "ZohoSubscriptions.plans.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/addons",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Addon": {
          "scope": "ZohoSubscriptions.plans.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/billing/v1/addons",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "addon_code": "storage-10gb",
            "name": "10GB Extra Storage",
            "unit_price": 9.99,
            "type": "recurring"
          }
        },
        "Get Invoices (Subs)": {
          "scope": "ZohoSubscriptions.invoices.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/invoices",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Invoice By ID (Subs)": {
          "scope": "ZohoSubscriptions.invoices.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/invoices/{invoice_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Collect Invoice Payment": {
          "scope": "ZohoSubscriptions.invoices.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/billing/v1/invoices/{invoice_id}/collect",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Credit Notes (Subs)": {
          "scope": "ZohoSubscriptions.creditnotes.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/creditnotes",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Coupons": {
          "scope": "ZohoSubscriptions.coupons.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/coupons",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Coupon": {
          "scope": "ZohoSubscriptions.coupons.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/billing/v1/coupons",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "coupon_code": "SAVE20",
            "name": "20% Off",
            "discount_type": "percentage",
            "discount_percentage": 20,
            "apply_on": "plans",
            "duration_type": "forever"
          }
        },
        "Get Customer Payment Methods": {
          "scope": "ZohoSubscriptions.customers.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/customers/{customer_id}/cards",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Webhooks": {
          "scope": "ZohoSubscriptions.subscriptions.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/webhooks",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Webhook": {
          "scope": "ZohoSubscriptions.subscriptions.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/billing/v1/webhooks",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "description": "Subscription events webhook",
            "callback_url": "https://yourapp.com/webhook",
            "events": [
              "subscription.created",
              "subscription.cancelled",
              "invoice.created"
            ]
          }
        }
      }
    },
    "payroll": {
      "scopes": [
        "ZohoPayroll.fullaccess.all",
        "ZohoPayroll.employees.READ",
        "ZohoPayroll.employees.CREATE",
        "ZohoPayroll.payrun.READ",
        "ZohoPayroll.payrun.CREATE",
        "ZohoPayroll.payschedule.READ",
        "ZohoPayroll.reports.READ",
        "ZohoPayroll.settings.READ",
        "ZohoPayroll.taxes.READ",
        "ZohoPayroll.loans.ALL"
      ],
      "baseUrl": "https://payroll.zoho.com/api/v1",
      "endpoints": {
        "Get Employees (Payroll)": {
          "scope": "ZohoPayroll.employees.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/employees",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Employee By ID (Payroll)": {
          "scope": "ZohoPayroll.employees.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/employees/{employee_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Employee (Payroll)": {
          "scope": "ZohoPayroll.employees.CREATE",
          "method": "POST",
          "url": "https://payroll.zoho.com/api/v1/employees",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "employee_id": "EMP-001",
            "first_name": "John",
            "last_name": "Doe",
            "email": "john@company.com",
            "date_of_joining": "2025-01-01",
            "department_name": "Engineering",
            "designation": "Engineer",
            "pay_frequency": "monthly"
          }
        },
        "Update Employee (Payroll)": {
          "scope": "ZohoPayroll.employees.UPDATE",
          "method": "PUT",
          "url": "https://payroll.zoho.com/api/v1/employees/{employee_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "department_name": "Product"
          }
        },
        "Get Pay Runs": {
          "scope": "ZohoPayroll.payruns.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/payruns",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Pay Run By ID": {
          "scope": "ZohoPayroll.payruns.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/payruns/{payrun_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Pay Run": {
          "scope": "ZohoPayroll.payruns.CREATE",
          "method": "POST",
          "url": "https://payroll.zoho.com/api/v1/payruns",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "pay_period": {
              "start_date": "2025-01-01",
              "end_date": "2025-01-31"
            },
            "pay_date": "2025-01-31"
          }
        },
        "Approve Pay Run": {
          "scope": "ZohoPayroll.payruns.UPDATE",
          "method": "POST",
          "url": "https://payroll.zoho.com/api/v1/payruns/{payrun_id}/approve",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Payslips": {
          "scope": "ZohoPayroll.payslips.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/payslips",
          "params": {
            "payrun_id": "{payrun_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Payslip By ID": {
          "scope": "ZohoPayroll.payslips.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/payslips/{payslip_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Download Payslip": {
          "scope": "ZohoPayroll.payslips.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/payslips/{payslip_id}/pdf",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Send Payslips": {
          "scope": "ZohoPayroll.payslips.UPDATE",
          "method": "POST",
          "url": "https://payroll.zoho.com/api/v1/payruns/{payrun_id}/sendpayslips",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Salary Components": {
          "scope": "ZohoPayroll.settings.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/salarycomponents",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Salary Component": {
          "scope": "ZohoPayroll.settings.CREATE",
          "method": "POST",
          "url": "https://payroll.zoho.com/api/v1/salarycomponents",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "component_name": "HRA",
            "component_type": "earning",
            "calculation_type": "percentage",
            "percentage": 40
          }
        },
        "Get Pay Grades": {
          "scope": "ZohoPayroll.settings.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/paygrades",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Pay Grade": {
          "scope": "ZohoPayroll.settings.CREATE",
          "method": "POST",
          "url": "https://payroll.zoho.com/api/v1/paygrades",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Grade A",
            "pay_range": {
              "minimum": 50000,
              "maximum": 100000
            },
            "currency_code": "USD"
          }
        },
        "Get Statutory Settings": {
          "scope": "ZohoPayroll.settings.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/statutory",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Leave Encashments": {
          "scope": "ZohoPayroll.settings.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/leaveencashments",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Tax Declarations": {
          "scope": "ZohoPayroll.taxdeclarations.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/taxdeclarations",
          "params": {
            "fiscal_year": "2025"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Reports (Payroll)": {
          "scope": "ZohoPayroll.reports.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/reports/payruns",
          "params": {
            "from": "2025-01-01",
            "to": "2025-12-31"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        }
      }
    },
    "sprints": {
      "scopes": [
        "ZohoSprints.projects.ALL",
        "ZohoSprints.projects.READ",
        "ZohoSprints.projects.CREATE",
        "ZohoSprints.sprints.ALL",
        "ZohoSprints.sprints.READ",
        "ZohoSprints.sprints.CREATE",
        "ZohoSprints.items.ALL",
        "ZohoSprints.items.READ",
        "ZohoSprints.items.CREATE",
        "ZohoSprints.epic.ALL",
        "ZohoSprints.boards.ALL",
        "ZohoSprints.reports.READ",
        "ZohoSprints.users.ALL",
        "ZohoSprints.timesheets.ALL"
      ],
      "baseUrl": "https://sprints.zoho.com/apiv2",
      "endpoints": {
        "Get Teams (Sprints)": {
          "scope": "ZohoSprints.teams.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/teams",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Projects (Sprints)": {
          "scope": "ZohoSprints.projects.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Project By ID (Sprints)": {
          "scope": "ZohoSprints.projects.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Project (Sprints)": {
          "scope": "ZohoSprints.projects.CREATE",
          "method": "POST",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Mobile App v2",
            "description": "Version 2 of the mobile application",
            "startdate": "01-Jan-2025",
            "enddate": "31-Dec-2025"
          }
        },
        "Update Project (Sprints)": {
          "scope": "ZohoSprints.projects.UPDATE",
          "method": "POST",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Mobile App v2 - Updated"
          }
        },
        "Get Sprints": {
          "scope": "ZohoSprints.sprints.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/sprints/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Sprint By ID": {
          "scope": "ZohoSprints.sprints.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/sprints/{sprint_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Sprint": {
          "scope": "ZohoSprints.sprints.CREATE",
          "method": "POST",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/sprints/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Sprint 1",
            "startdate": "01-Jan-2025",
            "enddate": "14-Jan-2025",
            "goal": "Complete user authentication module"
          }
        },
        "Update Sprint": {
          "scope": "ZohoSprints.sprints.UPDATE",
          "method": "POST",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/sprints/{sprint_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Sprint 1 Updated"
          }
        },
        "Start Sprint": {
          "scope": "ZohoSprints.sprints.UPDATE",
          "method": "POST",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/sprints/{sprint_id}/status/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "status": "1"
          }
        },
        "Complete Sprint": {
          "scope": "ZohoSprints.sprints.UPDATE",
          "method": "POST",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/sprints/{sprint_id}/status/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "status": "2"
          }
        },
        "Get Items (Work Items)": {
          "scope": "ZohoSprints.items.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/sprints/{sprint_id}/item/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Item": {
          "scope": "ZohoSprints.items.CREATE",
          "method": "POST",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/sprints/{sprint_id}/item/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Implement login API",
            "description": "Create REST API for user login",
            "type": "1",
            "priority": "2",
            "assignee": "{user_id}",
            "storypoints": 5
          }
        },
        "Update Item": {
          "scope": "ZohoSprints.items.UPDATE",
          "method": "POST",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/sprints/{sprint_id}/item/{item_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "statusid": "{status_id}"
          }
        },
        "Delete Item": {
          "scope": "ZohoSprints.items.DELETE",
          "method": "DELETE",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/item/{item_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Item Comments": {
          "scope": "ZohoSprints.items.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/item/{item_id}/comments/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Item Comment": {
          "scope": "ZohoSprints.items.CREATE",
          "method": "POST",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/item/{item_id}/comments/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "content": "This is blocked by the DB migration task.",
            "notify_all_users": true
          }
        },
        "Get Backlogs": {
          "scope": "ZohoSprints.items.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/backlog/item/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Backlog Item": {
          "scope": "ZohoSprints.items.CREATE",
          "method": "POST",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/backlog/item/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Implement dark mode",
            "type": "2",
            "priority": "3",
            "storypoints": 8
          }
        },
        "Get Project Members": {
          "scope": "ZohoSprints.projects.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/users/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Epics": {
          "scope": "ZohoSprints.items.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/epic/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Epic": {
          "scope": "ZohoSprints.items.CREATE",
          "method": "POST",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/epic/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "User Management Epic",
            "description": "All user management features",
            "color": "#FF5733"
          }
        },
        "Get Releases": {
          "scope": "ZohoSprints.items.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/release/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Release": {
          "scope": "ZohoSprints.items.CREATE",
          "method": "POST",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/release/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "v2.0.0",
            "description": "Major release",
            "duedate": "31-Mar-2025"
          }
        },
        "Get Burndown Chart": {
          "scope": "ZohoSprints.reports.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/sprints/{sprint_id}/burndown/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Velocity Chart": {
          "scope": "ZohoSprints.reports.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/team/{team_id}/projects/{project_id}/velocity/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        }
      }
    },
    "meeting": {
      "scopes": [
        "ZohoMeeting.meeting.ALL",
        "ZohoMeeting.meeting.READ",
        "ZohoMeeting.meeting.CREATE",
        "ZohoMeeting.meeting.UPDATE",
        "ZohoMeeting.meeting.DELETE",
        "ZohoMeeting.webinar.ALL",
        "ZohoMeeting.webinar.CREATE",
        "ZohoMeeting.recording.ALL",
        "ZohoMeeting.recording.READ",
        "ZohoMeeting.contacts.READ",
        "ZohoMeeting.reports.READ"
      ],
      "baseUrl": "https://meeting.zoho.com/api/v1",
      "endpoints": {
        "Get Sessions": {
          "scope": "ZohoMeeting.sessions.READ",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/sessions.json",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Session By ID": {
          "scope": "ZohoMeeting.sessions.READ",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/sessions/{session_id}.json",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Meeting": {
          "scope": "ZohoMeeting.sessions.CREATE",
          "method": "POST",
          "url": "https://meeting.zoho.com/api/v1/sessions.json",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "session": {
              "topic": "Product Demo",
              "agenda": "Demonstrate new features",
              "startTime": "2025-12-31T10:00:00+05:30",
              "duration": 60,
              "type": 1,
              "password": "meet123",
              "settings": {
                "hostVideo": true,
                "participantVideo": true,
                "audio": "voip",
                "waitingRoom": true,
                "recording": "cloud"
              }
            }
          }
        },
        "Update Meeting": {
          "scope": "ZohoMeeting.sessions.UPDATE",
          "method": "PUT",
          "url": "https://meeting.zoho.com/api/v1/sessions/{session_id}.json",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "session": {
              "topic": "Updated Product Demo",
              "startTime": "2025-12-31T14:00:00+05:30"
            }
          }
        },
        "Delete Meeting": {
          "scope": "ZohoMeeting.sessions.DELETE",
          "method": "DELETE",
          "url": "https://meeting.zoho.com/api/v1/sessions/{session_id}.json",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Upcoming Meetings": {
          "scope": "ZohoMeeting.sessions.READ",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/sessions.json",
          "params": {
            "type": "upcoming"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Past Meetings": {
          "scope": "ZohoMeeting.sessions.READ",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/sessions.json",
          "params": {
            "type": "past"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Schedule Webinar": {
          "scope": "ZohoMeeting.sessions.CREATE",
          "method": "POST",
          "url": "https://meeting.zoho.com/api/v1/sessions.json",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "session": {
              "topic": "Quarterly Webinar",
              "agenda": "Q4 results and 2026 roadmap",
              "startTime": "2025-12-31T15:00:00+05:30",
              "duration": 90,
              "type": 5,
              "settings": {
                "registration": true,
                "recording": "cloud"
              }
            }
          }
        },
        "Get Registrants": {
          "scope": "ZohoMeeting.sessions.READ",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/sessions/{session_id}/registrants.json",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Registrant": {
          "scope": "ZohoMeeting.sessions.UPDATE",
          "method": "POST",
          "url": "https://meeting.zoho.com/api/v1/sessions/{session_id}/registrants.json",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "registrants": [
              {
                "email": "attendee@example.com",
                "first_name": "John",
                "last_name": "Doe"
              }
            ]
          }
        },
        "Get Recordings": {
          "scope": "ZohoMeeting.sessions.READ",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/sessions/{session_id}/recordings.json",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Meeting Invitees": {
          "scope": "ZohoMeeting.sessions.READ",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/sessions/{session_id}/invitees.json",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Invitee": {
          "scope": "ZohoMeeting.sessions.UPDATE",
          "method": "POST",
          "url": "https://meeting.zoho.com/api/v1/sessions/{session_id}/invitees.json",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "invitees": [
              {
                "email": "invitee@example.com",
                "name": "Jane Smith"
              }
            ]
          }
        },
        "Send Invitation": {
          "scope": "ZohoMeeting.sessions.UPDATE",
          "method": "POST",
          "url": "https://meeting.zoho.com/api/v1/sessions/{session_id}/invitation.json",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "emails": [
              "attendee@example.com"
            ]
          }
        },
        "Get Meeting Polls": {
          "scope": "ZohoMeeting.sessions.READ",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/sessions/{session_id}/polls.json",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Poll": {
          "scope": "ZohoMeeting.sessions.UPDATE",
          "method": "POST",
          "url": "https://meeting.zoho.com/api/v1/sessions/{session_id}/polls.json",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "poll": {
              "title": "Quick Poll",
              "questions": [
                {
                  "question": "How would you rate this meeting?",
                  "type": "single",
                  "answers": [
                    "Excellent",
                    "Good",
                    "Average",
                    "Poor"
                  ]
                }
              ]
            }
          }
        },
        "Get Meeting Statistics": {
          "scope": "ZohoMeeting.sessions.READ",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/sessions/{session_id}/stats.json",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Attendees": {
          "scope": "ZohoMeeting.sessions.READ",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/sessions/{session_id}/attendees.json",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Start Meeting (Get Join URL)": {
          "scope": "ZohoMeeting.sessions.UPDATE",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/sessions/{session_id}/start.json",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        }
      }
    },
    "vault": {
      "scopes": [
        "ZohoVault.secrets.ALL",
        "ZohoVault.secrets.READ",
        "ZohoVault.secrets.CREATE",
        "ZohoVault.secrets.UPDATE",
        "ZohoVault.secrets.DELETE",
        "ZohoVault.folders.ALL",
        "ZohoVault.folders.READ",
        "ZohoVault.users.ALL",
        "ZohoVault.settings.READ",
        "ZohoVault.audit.READ"
      ],
      "baseUrl": "https://vault.zoho.com/api/v1",
      "endpoints": {
        "Get Passwords": {
          "scope": "ZohoVault.passwords.READ",
          "method": "GET",
          "url": "https://vault.zoho.com/api/v1/passwords",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Password By ID": {
          "scope": "ZohoVault.passwords.READ",
          "method": "GET",
          "url": "https://vault.zoho.com/api/v1/passwords/{password_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Password": {
          "scope": "ZohoVault.passwords.CREATE",
          "method": "POST",
          "url": "https://vault.zoho.com/api/v1/passwords",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Server Admin",
            "login": "admin",
            "password": "{password}",
            "url": "https://server.example.com",
            "notes": "Production server credentials",
            "chamber_id": "{chamber_id}",
            "tags": [
              "production",
              "server"
            ]
          }
        },
        "Update Password": {
          "scope": "ZohoVault.passwords.UPDATE",
          "method": "PUT",
          "url": "https://vault.zoho.com/api/v1/passwords/{password_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Server Admin Updated",
            "notes": "Updated credentials"
          }
        },
        "Delete Password": {
          "scope": "ZohoVault.passwords.DELETE",
          "method": "DELETE",
          "url": "https://vault.zoho.com/api/v1/passwords/{password_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Password Value": {
          "scope": "ZohoVault.passwords.READ",
          "method": "GET",
          "url": "https://vault.zoho.com/api/v1/passwords/{password_id}/secret",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Search Passwords": {
          "scope": "ZohoVault.passwords.READ",
          "method": "GET",
          "url": "https://vault.zoho.com/api/v1/passwords",
          "params": {
            "searchkey": "server"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Chambers": {
          "scope": "ZohoVault.chambers.READ",
          "method": "GET",
          "url": "https://vault.zoho.com/api/v1/chambers",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Chamber By ID": {
          "scope": "ZohoVault.chambers.READ",
          "method": "GET",
          "url": "https://vault.zoho.com/api/v1/chambers/{chamber_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Chamber": {
          "scope": "ZohoVault.chambers.CREATE",
          "method": "POST",
          "url": "https://vault.zoho.com/api/v1/chambers",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Production Servers",
            "description": "All production server credentials"
          }
        },
        "Update Chamber": {
          "scope": "ZohoVault.chambers.UPDATE",
          "method": "PUT",
          "url": "https://vault.zoho.com/api/v1/chambers/{chamber_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Production Servers - Updated"
          }
        },
        "Delete Chamber": {
          "scope": "ZohoVault.chambers.DELETE",
          "method": "DELETE",
          "url": "https://vault.zoho.com/api/v1/chambers/{chamber_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Share Password": {
          "scope": "ZohoVault.passwords.UPDATE",
          "method": "POST",
          "url": "https://vault.zoho.com/api/v1/passwords/{password_id}/share",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "users": [
              {
                "email": "user@example.com",
                "role": "view"
              }
            ]
          }
        },
        "Get Shared Passwords": {
          "scope": "ZohoVault.passwords.READ",
          "method": "GET",
          "url": "https://vault.zoho.com/api/v1/passwords/shared",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Generate Password": {
          "scope": "ZohoVault.passwords.READ",
          "method": "POST",
          "url": "https://vault.zoho.com/api/v1/passwords/generate",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "length": 16,
            "use_uppercase": true,
            "use_numbers": true,
            "use_symbols": true
          }
        },
        "Get Password History": {
          "scope": "ZohoVault.passwords.READ",
          "method": "GET",
          "url": "https://vault.zoho.com/api/v1/passwords/{password_id}/history",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Users (Vault)": {
          "scope": "ZohoVault.users.READ",
          "method": "GET",
          "url": "https://vault.zoho.com/api/v1/users",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Audit Logs": {
          "scope": "ZohoVault.audit.READ",
          "method": "GET",
          "url": "https://vault.zoho.com/api/v1/audit",
          "params": {
            "from_date": "2025-01-01",
            "to_date": "2025-12-31"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        }
      }
    },
    "connect": {
      "scopes": [
        "ZohoConnect.groups.ALL",
        "ZohoConnect.groups.READ",
        "ZohoConnect.groups.CREATE",
        "ZohoConnect.streams.ALL",
        "ZohoConnect.streams.CREATE",
        "ZohoConnect.tasks.ALL",
        "ZohoConnect.events.ALL",
        "ZohoConnect.events.READ",
        "ZohoConnect.manuals.ALL",
        "ZohoConnect.forums.ALL",
        "ZohoConnect.users.READ",
        "ZohoConnect.networks.READ"
      ],
      "baseUrl": "https://connect.zoho.com/api/v1",
      "endpoints": {
        "Get Network Info": {
          "scope": "ZohoConnect.networks.READ",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Groups": {
          "scope": "ZohoConnect.groups.READ",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/groups",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Group By ID": {
          "scope": "ZohoConnect.groups.READ",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/groups/{group_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Group": {
          "scope": "ZohoConnect.groups.CREATE",
          "method": "POST",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/groups",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Engineering Team",
            "description": "Group for engineering discussions",
            "type": "private"
          }
        },
        "Update Group": {
          "scope": "ZohoConnect.groups.UPDATE",
          "method": "PUT",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/groups/{group_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "description": "Updated group description"
          }
        },
        "Delete Group": {
          "scope": "ZohoConnect.groups.DELETE",
          "method": "DELETE",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/groups/{group_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Group Members": {
          "scope": "ZohoConnect.groups.READ",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/groups/{group_id}/members",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Group Member": {
          "scope": "ZohoConnect.groups.UPDATE",
          "method": "POST",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/groups/{group_id}/members",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "members": [
              {
                "email": "user@example.com"
              }
            ]
          }
        },
        "Get Posts (Connect)": {
          "scope": "ZohoConnect.streams.READ",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/posts",
          "params": {
            "from": 1,
            "limit": 50
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Post (Connect)": {
          "scope": "ZohoConnect.streams.CREATE",
          "method": "POST",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/posts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "message": "Exciting company update! We just launched our new product.",
            "postto": "all"
          }
        },
        "Create Group Post": {
          "scope": "ZohoConnect.streams.CREATE",
          "method": "POST",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/groups/{group_id}/posts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "message": "Team meeting scheduled for Friday at 3 PM."
          }
        },
        "Like Post": {
          "scope": "ZohoConnect.streams.CREATE",
          "method": "POST",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/posts/{post_id}/like",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Post Comments": {
          "scope": "ZohoConnect.streams.READ",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/posts/{post_id}/comments",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Comment on Post": {
          "scope": "ZohoConnect.streams.CREATE",
          "method": "POST",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/posts/{post_id}/comments",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "message": "Great news! Looking forward to the launch."
          }
        },
        "Get Tasks (Connect)": {
          "scope": "ZohoConnect.tasks.READ",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/tasks",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Task (Connect)": {
          "scope": "ZohoConnect.tasks.CREATE",
          "method": "POST",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/tasks",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Review proposal",
            "duedate": "2025-12-31",
            "assignee": "{user_id}"
          }
        },
        "Get Events (Connect)": {
          "scope": "ZohoConnect.events.READ",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/events",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Event (Connect)": {
          "scope": "ZohoConnect.events.CREATE",
          "method": "POST",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/events",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Company Town Hall",
            "starttime": "2025-12-31T14:00:00+05:30",
            "endtime": "2025-12-31T16:00:00+05:30",
            "description": "Annual town hall meeting"
          }
        },
        "Get Manuals": {
          "scope": "ZohoConnect.manuals.READ",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/manuals",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Manual": {
          "scope": "ZohoConnect.manuals.CREATE",
          "method": "POST",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/manuals",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Employee Handbook",
            "description": "Complete employee handbook"
          }
        },
        "Get Forums (Connect)": {
          "scope": "ZohoConnect.forums.READ",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/categories",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Forum (Connect)": {
          "scope": "ZohoConnect.forums.CREATE",
          "method": "POST",
          "url": "https://connect.zoho.com/api/v1/networks/{network_id}/categories",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "General Discussion",
            "description": "Open forum for all employees"
          }
        }
      }
    },
    "salesiq": {
      "scopes": [
        "SalesIQ.conversations.ALL",
        "SalesIQ.conversations.READ",
        "SalesIQ.visitors.ALL",
        "SalesIQ.visitors.READ",
        "SalesIQ.contacts.ALL",
        "SalesIQ.contacts.READ",
        "SalesIQ.agents.READ",
        "SalesIQ.departments.READ",
        "SalesIQ.bots.ALL",
        "SalesIQ.bots.READ",
        "SalesIQ.reports.READ",
        "SalesIQ.articles.ALL"
      ],
      "baseUrl": "https://salesiq.zoho.com/api/v2",
      "endpoints": {
        "Get Portals (SalesIQ)": {
          "scope": "SalesIQ.portals.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/portals",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Websites": {
          "scope": "SalesIQ.websites.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/websites",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Website By ID": {
          "scope": "SalesIQ.websites.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/websites/{website_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Visitors": {
          "scope": "SalesIQ.visitors.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/websites/{website_id}/visitors",
          "params": {
            "from": 0,
            "limit": 50
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Visitor By ID": {
          "scope": "SalesIQ.visitors.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/websites/{website_id}/visitors/{visitor_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Chats": {
          "scope": "SalesIQ.chats.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/websites/{website_id}/chats",
          "params": {
            "from": 0,
            "limit": 50
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Chat By ID": {
          "scope": "SalesIQ.chats.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/websites/{website_id}/chats/{chat_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Chat Messages": {
          "scope": "SalesIQ.chats.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/websites/{website_id}/chats/{chat_id}/messages",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Send Chat Message": {
          "scope": "SalesIQ.chats.UPDATE",
          "method": "POST",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/websites/{website_id}/chats/{chat_id}/messages",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "text": "Hello! How can I help you today?",
            "type": "text"
          }
        },
        "Transfer Chat": {
          "scope": "SalesIQ.chats.UPDATE",
          "method": "POST",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/websites/{website_id}/chats/{chat_id}/transfer",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "operator_id": "{operator_id}"
          }
        },
        "Get Operators": {
          "scope": "SalesIQ.operators.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/operators",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Operator By ID": {
          "scope": "SalesIQ.operators.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/operators/{operator_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Operator": {
          "scope": "SalesIQ.operators.CREATE",
          "method": "POST",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/operators",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "email": "agent@example.com",
            "name": "Jane Agent",
            "role": "operator"
          }
        },
        "Get Departments (SalesIQ)": {
          "scope": "SalesIQ.websites.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/websites/{website_id}/departments",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Leads (SalesIQ)": {
          "scope": "SalesIQ.leads.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/leads",
          "params": {
            "from": 0,
            "limit": 50
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Lead (SalesIQ)": {
          "scope": "SalesIQ.leads.CREATE",
          "method": "POST",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/leads",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "John Doe",
            "email": "john@example.com",
            "company": "Acme Corp",
            "phone": "1234567890"
          }
        },
        "Update Lead (SalesIQ)": {
          "scope": "SalesIQ.leads.UPDATE",
          "method": "PUT",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/leads/{lead_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "company": "Acme Corp Updated"
          }
        },
        "Delete Lead (SalesIQ)": {
          "scope": "SalesIQ.leads.DELETE",
          "method": "DELETE",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/leads/{lead_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Chat Reports": {
          "scope": "SalesIQ.reports.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/reports/chats",
          "params": {
            "from": "2025-01-01",
            "to": "2025-12-31"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Missed Chats": {
          "scope": "SalesIQ.chats.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/websites/{website_id}/chats",
          "params": {
            "status": "missed",
            "from": 0,
            "limit": 50
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Canned Responses": {
          "scope": "SalesIQ.websites.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/websites/{website_id}/cannedmessages",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Canned Response": {
          "scope": "SalesIQ.websites.UPDATE",
          "method": "POST",
          "url": "https://salesiq.zoho.com/api/v2/portals/{portal_id}/websites/{website_id}/cannedmessages",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "title": "Greeting",
            "message": "Hello! Welcome to our support. How can I help you today?",
            "category": "greetings"
          }
        }
      }
    },
    "bigin": {
      "scopes": [
        "ZohoBigin.modules.ALL",
        "ZohoBigin.modules.READ",
        "ZohoBigin.modules.CREATE",
        "ZohoBigin.modules.UPDATE",
        "ZohoBigin.modules.DELETE",
        "ZohoBigin.settings.ALL",
        "ZohoBigin.users.READ",
        "ZohoBigin.org.READ",
        "ZohoBigin.pipelines.ALL",
        "ZohoBigin.pipelines.READ"
      ],
      "baseUrl": "https://www.zohoapis.com/bigin/v1",
      "endpoints": {
        "Get Contacts (Bigin)": {
          "scope": "ZohoBigin.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/Contacts",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Contact By ID (Bigin)": {
          "scope": "ZohoBigin.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/Contacts/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Search Contacts (Bigin)": {
          "scope": "ZohoBigin.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/Contacts/search",
          "params": {
            "criteria": "(Last_Name:equals:Smith)"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Contact (Bigin)": {
          "scope": "ZohoBigin.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/bigin/v1/Contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "First_Name": "John",
                "Last_Name": "Doe",
                "Email": "john@example.com",
                "Phone": "1234567890",
                "Company": "Acme Corp"
              }
            ]
          }
        },
        "Update Contact (Bigin)": {
          "scope": "ZohoBigin.modules.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/bigin/v1/Contacts/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "id": "{record_id}",
                "Phone": "9876543210"
              }
            ]
          }
        },
        "Delete Contact (Bigin)": {
          "scope": "ZohoBigin.modules.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/bigin/v1/Contacts/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Pipelines (Bigin)": {
          "scope": "ZohoBigin.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/Pipelines",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Pipeline By ID (Bigin)": {
          "scope": "ZohoBigin.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/Pipelines/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Pipeline (Bigin)": {
          "scope": "ZohoBigin.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/bigin/v1/Pipelines",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Pipeline_Name": "New Sale",
                "Stage": "Qualified",
                "Amount": 5000,
                "Contact_Name": {
                  "name": "John Doe",
                  "id": "{contact_id}"
                },
                "Closing_Date": "2025-12-31"
              }
            ]
          }
        },
        "Update Pipeline (Bigin)": {
          "scope": "ZohoBigin.modules.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/bigin/v1/Pipelines/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "id": "{record_id}",
                "Stage": "Won",
                "Amount": 5500
              }
            ]
          }
        },
        "Delete Pipeline (Bigin)": {
          "scope": "ZohoBigin.modules.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/bigin/v1/Pipelines/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Companies (Bigin)": {
          "scope": "ZohoBigin.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/Companies",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Company (Bigin)": {
          "scope": "ZohoBigin.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/bigin/v1/Companies",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Company_Name": "Acme Corp",
                "Website": "https://acme.com",
                "Phone": "1234567890",
                "Industry": "Technology"
              }
            ]
          }
        },
        "Get Activities (Bigin)": {
          "scope": "ZohoBigin.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/Activities",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Activity (Bigin)": {
          "scope": "ZohoBigin.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/bigin/v1/Activities",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Subject": "Follow Up Call",
                "Type": "Call",
                "Status": "Not Started",
                "Due_Date": "2025-12-31"
              }
            ]
          }
        },
        "Get Notes (Bigin)": {
          "scope": "ZohoBigin.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/Notes",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Note (Bigin)": {
          "scope": "ZohoBigin.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/bigin/v1/Notes",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Note_Title": "Call Summary",
                "Note_Content": "Discussed pricing and timelines",
                "Parent_Id": {
                  "id": "{contact_id}"
                },
                "$se_module": "Contacts"
              }
            ]
          }
        },
        "Get Users (Bigin)": {
          "scope": "ZohoBigin.users.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/users",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Modules (Bigin)": {
          "scope": "ZohoBigin.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/settings/modules",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Fields (Bigin)": {
          "scope": "ZohoBigin.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/settings/fields",
          "params": {
            "module": "Contacts"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "COQL Query (Bigin)": {
          "scope": "ZohoBigin.modules.READ",
          "method": "POST",
          "url": "https://www.zohoapis.com/bigin/v1/coql",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "select_query": "select Last_Name, Email from Contacts limit 200"
          }
        }
      }
    },
    "fsm": {
      "scopes": [
        "ZohoFSM.workorders.ALL",
        "ZohoFSM.workorders.READ",
        "ZohoFSM.workorders.CREATE",
        "ZohoFSM.workorders.UPDATE",
        "ZohoFSM.servicerequests.ALL",
        "ZohoFSM.servicerequests.READ",
        "ZohoFSM.assets.ALL",
        "ZohoFSM.assets.READ",
        "ZohoFSM.contacts.ALL",
        "ZohoFSM.agents.READ",
        "ZohoFSM.reports.READ",
        "ZohoFSM.settings.READ"
      ],
      "baseUrl": "https://fsm.zoho.com/api/v1",
      "endpoints": {
        "Get Work Orders": {
          "scope": "ZohoFSM.workorder.READ",
          "method": "GET",
          "url": "https://fsm.zoho.com/fsm/v1/Work_Orders",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Work Order By ID": {
          "scope": "ZohoFSM.workorder.READ",
          "method": "GET",
          "url": "https://fsm.zoho.com/fsm/v1/Work_Orders/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Work Order": {
          "scope": "ZohoFSM.workorder.CREATE",
          "method": "POST",
          "url": "https://fsm.zoho.com/fsm/v1/Work_Orders",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Subject": "HVAC Maintenance",
                "Status": "New",
                "Priority": "High",
                "Service_Address": {
                  "Street": "456 Oak Ave",
                  "City": "Chicago",
                  "State": "IL",
                  "Zip": "60601",
                  "Country": "USA"
                },
                "Contact_Name": {
                  "name": "John Doe",
                  "id": "{contact_id}"
                },
                "Scheduled_Date_Time": "2025-12-31T09:00:00+05:30"
              }
            ]
          }
        },
        "Update Work Order": {
          "scope": "ZohoFSM.workorder.UPDATE",
          "method": "PUT",
          "url": "https://fsm.zoho.com/fsm/v1/Work_Orders/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "id": "{record_id}",
                "Status": "In Progress",
                "Field_Agent": {
                  "id": "{agent_id}"
                }
              }
            ]
          }
        },
        "Delete Work Order": {
          "scope": "ZohoFSM.workorder.DELETE",
          "method": "DELETE",
          "url": "https://fsm.zoho.com/fsm/v1/Work_Orders/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Service Appointments": {
          "scope": "ZohoFSM.serviceappointment.READ",
          "method": "GET",
          "url": "https://fsm.zoho.com/fsm/v1/Service_Appointments",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Service Appointment": {
          "scope": "ZohoFSM.serviceappointment.CREATE",
          "method": "POST",
          "url": "https://fsm.zoho.com/fsm/v1/Service_Appointments",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Name": "SA-001",
                "Scheduled_Date_Time": "2025-12-31T10:00:00+05:30",
                "Duration_In_Minutes": 120,
                "Work_Order": {
                  "id": "{work_order_id}"
                },
                "Assigned_Agents": [
                  {
                    "id": "{agent_id}"
                  }
                ]
              }
            ]
          }
        },
        "Get Field Agents": {
          "scope": "ZohoFSM.fieldagent.READ",
          "method": "GET",
          "url": "https://fsm.zoho.com/fsm/v1/Field_Agents",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Field Agent": {
          "scope": "ZohoFSM.fieldagent.CREATE",
          "method": "POST",
          "url": "https://fsm.zoho.com/fsm/v1/Field_Agents",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Name": "Mike Technician",
                "Email": "mike@company.com",
                "Phone": "1234567890",
                "Skills": [
                  "HVAC",
                  "Electrical"
                ]
              }
            ]
          }
        },
        "Get Contacts (FSM)": {
          "scope": "ZohoFSM.modules.READ",
          "method": "GET",
          "url": "https://fsm.zoho.com/fsm/v1/Contacts",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Contact (FSM)": {
          "scope": "ZohoFSM.modules.CREATE",
          "method": "POST",
          "url": "https://fsm.zoho.com/fsm/v1/Contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "First_Name": "John",
                "Last_Name": "Doe",
                "Email": "john@example.com",
                "Phone": "1234567890"
              }
            ]
          }
        },
        "Get Service Reports": {
          "scope": "ZohoFSM.workorder.READ",
          "method": "GET",
          "url": "https://fsm.zoho.com/fsm/v1/Service_Reports",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Service Report": {
          "scope": "ZohoFSM.workorder.CREATE",
          "method": "POST",
          "url": "https://fsm.zoho.com/fsm/v1/Service_Reports",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Work_Order": {
                  "id": "{work_order_id}"
                },
                "Summary": "Completed HVAC maintenance. Replaced filters.",
                "Parts_Used": [
                  {
                    "item": {
                      "id": "{item_id}"
                    },
                    "Quantity": 2
                  }
                ]
              }
            ]
          }
        },
        "Get Products (FSM)": {
          "scope": "ZohoFSM.modules.READ",
          "method": "GET",
          "url": "https://fsm.zoho.com/fsm/v1/Products",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Services (FSM)": {
          "scope": "ZohoFSM.modules.READ",
          "method": "GET",
          "url": "https://fsm.zoho.com/fsm/v1/Services",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Service (FSM)": {
          "scope": "ZohoFSM.modules.CREATE",
          "method": "POST",
          "url": "https://fsm.zoho.com/fsm/v1/Services",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Name": "HVAC Maintenance",
                "Duration": 120,
                "Price": 150
              }
            ]
          }
        },
        "Get Companies (FSM)": {
          "scope": "ZohoFSM.modules.READ",
          "method": "GET",
          "url": "https://fsm.zoho.com/fsm/v1/Companies",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Modules (FSM)": {
          "scope": "ZohoFSM.settings.READ",
          "method": "GET",
          "url": "https://fsm.zoho.com/fsm/v1/settings/modules",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Asset Inventory": {
          "scope": "ZohoFSM.modules.READ",
          "method": "GET",
          "url": "https://fsm.zoho.com/fsm/v1/Assets",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Asset": {
          "scope": "ZohoFSM.modules.CREATE",
          "method": "POST",
          "url": "https://fsm.zoho.com/fsm/v1/Assets",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Asset_Name": "HVAC Unit #1",
                "Serial_Number": "SN-123456",
                "Contact": {
                  "id": "{contact_id}"
                },
                "Installation_Date": "2020-01-01",
                "Warranty_Expiry": "2027-01-01"
              }
            ]
          }
        }
      }
    },
    "oauth": {
      "scopes": [
        "N/A"
      ],
      "baseUrl": "https://accounts.zoho.com/oauth/v2",
      "endpoints": {
        "Get Authorization URL": {
          "scope": "ZohoOAuth.none.NONE",
          "method": "GET",
          "url": "https://accounts.zoho.com/oauth/v2/auth",
          "params": {
            "response_type": "code",
            "client_id": "{client_id}",
            "scope": "ZohoCRM.modules.ALL",
            "redirect_uri": "https://yourapp.com/callback",
            "access_type": "offline",
            "prompt": "consent"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Generate Access Token (Auth Code)": {
          "scope": "ZohoOAuth.none.NONE",
          "method": "POST",
          "url": "https://accounts.zoho.com/oauth/v2/token",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "grant_type": "authorization_code",
            "client_id": "{client_id}",
            "client_secret": "{client_secret}",
            "redirect_uri": "https://yourapp.com/callback",
            "code": "{authorization_code}"
          }
        },
        "Refresh Access Token": {
          "scope": "ZohoOAuth.none.NONE",
          "method": "POST",
          "url": "https://accounts.zoho.com/oauth/v2/token",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "grant_type": "refresh_token",
            "client_id": "{client_id}",
            "client_secret": "{client_secret}",
            "refresh_token": "{refresh_token}"
          }
        },
        "Generate Token (Client Credentials)": {
          "scope": "ZohoOAuth.none.NONE",
          "method": "POST",
          "url": "https://accounts.zoho.com/oauth/v2/token",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "grant_type": "client_credentials",
            "client_id": "{client_id}",
            "client_secret": "{client_secret}",
            "scope": "ZohoCRM.modules.ALL",
            "soid": "{org_id}"
          }
        },
        "Revoke Refresh Token": {
          "scope": "ZohoOAuth.none.NONE",
          "method": "POST",
          "url": "https://accounts.zoho.com/oauth/v2/token/revoke",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "token": "{refresh_token}"
          }
        },
        "Get Token Info": {
          "scope": "ZohoOAuth.none.NONE",
          "method": "GET",
          "url": "https://accounts.zoho.com/oauth/user/info",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Connected Apps": {
          "scope": "ZohoOAuth.none.NONE",
          "method": "GET",
          "url": "https://accounts.zoho.com/oauth/serverbasedapp",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create OAuth Client": {
          "scope": "ZohoOAuth.none.NONE",
          "method": "POST",
          "url": "https://api-console.zoho.com/oauth/clients",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "client_name": "My Application",
            "client_type": "web",
            "homepage_url": "https://yourapp.com",
            "redirect_uris": [
              "https://yourapp.com/callback"
            ],
            "authorized_javascript_origins": [
              "https://yourapp.com"
            ]
          }
        }
      }
    },
    "backstage": {
      "scopes": [
        "ZohoBackstage.events.ALL",
        "ZohoBackstage.events.READ",
        "ZohoBackstage.events.CREATE",
        "ZohoBackstage.attendees.ALL",
        "ZohoBackstage.attendees.READ",
        "ZohoBackstage.speakers.ALL",
        "ZohoBackstage.speakers.READ",
        "ZohoBackstage.tickets.ALL",
        "ZohoBackstage.tickets.READ",
        "ZohoBackstage.reports.READ"
      ],
      "baseUrl": "https://backstage.zoho.com/api/v1",
      "endpoints": {
        "Get Events (Backstage)": {
          "scope": "ZohoBackstage.events.READ",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/events",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Event By ID": {
          "scope": "ZohoBackstage.events.READ",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/events/{event_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Event (Backstage)": {
          "scope": "ZohoBackstage.events.CREATE",
          "method": "POST",
          "url": "https://backstage.zoho.com/api/v1/events",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "title": "Annual Tech Conference 2025",
            "description": "Our flagship annual technology conference",
            "start_date": "2025-09-01T09:00:00+05:30",
            "end_date": "2025-09-03T18:00:00+05:30",
            "timezone": "Asia/Kolkata",
            "event_type": "in-person",
            "venue": {
              "name": "Convention Center",
              "address": "123 Convention Blvd",
              "city": "Bangalore",
              "country": "India"
            }
          }
        },
        "Update Event (Backstage)": {
          "scope": "ZohoBackstage.events.UPDATE",
          "method": "PUT",
          "url": "https://backstage.zoho.com/api/v1/events/{event_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "title": "Annual Tech Conference 2025 - Updated"
          }
        },
        "Get Attendees (Backstage)": {
          "scope": "ZohoBackstage.attendees.READ",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/events/{event_id}/attendees",
          "params": {
            "from": 0,
            "limit": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Attendee By ID": {
          "scope": "ZohoBackstage.attendees.READ",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/events/{event_id}/attendees/{attendee_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Register Attendee": {
          "scope": "ZohoBackstage.attendees.CREATE",
          "method": "POST",
          "url": "https://backstage.zoho.com/api/v1/events/{event_id}/attendees",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "first_name": "John",
            "last_name": "Doe",
            "email": "john@example.com",
            "ticket_id": "{ticket_id}"
          }
        },
        "Update Attendee": {
          "scope": "ZohoBackstage.attendees.UPDATE",
          "method": "PUT",
          "url": "https://backstage.zoho.com/api/v1/events/{event_id}/attendees/{attendee_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "check_in_status": "checked_in"
          }
        },
        "Get Tickets": {
          "scope": "ZohoBackstage.events.READ",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/events/{event_id}/tickets",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Ticket Type": {
          "scope": "ZohoBackstage.events.CREATE",
          "method": "POST",
          "url": "https://backstage.zoho.com/api/v1/events/{event_id}/tickets",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "General Admission",
            "price": 99.99,
            "quantity": 500,
            "sale_start": "2025-07-01T00:00:00+05:30",
            "sale_end": "2025-08-31T23:59:59+05:30"
          }
        },
        "Get Sessions (Backstage)": {
          "scope": "ZohoBackstage.events.READ",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/events/{event_id}/sessions",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Session (Backstage)": {
          "scope": "ZohoBackstage.events.CREATE",
          "method": "POST",
          "url": "https://backstage.zoho.com/api/v1/events/{event_id}/sessions",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "title": "Keynote: Future of AI",
            "description": "Opening keynote session",
            "start_time": "2025-09-01T09:30:00+05:30",
            "end_time": "2025-09-01T10:30:00+05:30",
            "stage_id": "{stage_id}",
            "speakers": [
              {
                "speaker_id": "{speaker_id}"
              }
            ]
          }
        },
        "Get Speakers": {
          "scope": "ZohoBackstage.events.READ",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/events/{event_id}/speakers",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Speaker": {
          "scope": "ZohoBackstage.events.CREATE",
          "method": "POST",
          "url": "https://backstage.zoho.com/api/v1/events/{event_id}/speakers",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "first_name": "Jane",
            "last_name": "Smith",
            "email": "jane@example.com",
            "bio": "Leading AI researcher and author",
            "designation": "Chief AI Officer",
            "company": "TechCorp"
          }
        },
        "Get Sponsors": {
          "scope": "ZohoBackstage.events.READ",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/events/{event_id}/sponsors",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Sponsor": {
          "scope": "ZohoBackstage.events.CREATE",
          "method": "POST",
          "url": "https://backstage.zoho.com/api/v1/events/{event_id}/sponsors",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "company_name": "TechCorp",
            "tier": "Platinum",
            "logo_url": "https://techcorp.com/logo.png",
            "website": "https://techcorp.com"
          }
        },
        "Get Event Analytics": {
          "scope": "ZohoBackstage.reports.READ",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/events/{event_id}/analytics",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Send Event Email": {
          "scope": "ZohoBackstage.events.UPDATE",
          "method": "POST",
          "url": "https://backstage.zoho.com/api/v1/events/{event_id}/emails",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "subject": "Event Reminder: Tech Conference Tomorrow!",
            "body": "<p>Looking forward to seeing you tomorrow!</p>",
            "recipients": "all_attendees"
          }
        }
      }
    }
  }
};