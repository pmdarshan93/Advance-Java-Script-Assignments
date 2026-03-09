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
      "baseUrl": "https://www.zohoapis.com/crm/v2",
      "endpoints": {
        "Get Contacts": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/Contacts",
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
          "url": "https://www.zohoapis.com/crm/v2/Contacts/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Contact": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v2/Contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "First_Name": "John",
                "Last_Name": "Doe",
                "Email": "john.doe@example.com",
                "Phone": "1234567890",
                "Account_Name": "ABC Corp"
              }
            ]
          }
        },
        "Update Contact": {
          "scope": "ZohoCRM.modules.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/crm/v2/Contacts/{record_id}",
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
        "Delete Contact": {
          "scope": "ZohoCRM.modules.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/crm/v2/Contacts/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Leads": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/Leads",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Lead": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v2/Leads",
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
        "Convert Lead": {
          "scope": "ZohoCRM.modules.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v2/Leads/{record_id}/actions/convert",
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
                  "Closing_Date": "2024-12-31",
                  "Stage": "Qualification",
                  "Amount": 5000
                }
              }
            ]
          }
        },
        "Get Deals": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/Deals",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Deal": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v2/Deals",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Deal_Name": "Big Deal",
                "Stage": "Proposal/Price Quote",
                "Closing_Date": "2024-12-31",
                "Amount": 15000,
                "Account_Name": {
                  "name": "ABC Corp"
                }
              }
            ]
          }
        },
        "Get Accounts": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/Accounts",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Account": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v2/Accounts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Account_Name": "Tech Corp",
                "Website": "https://techcorp.com",
                "Phone": "1234567890",
                "Industry": "Technology",
                "Annual_Revenue": 1000000
              }
            ]
          }
        },
        "Get Tasks": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/Tasks",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Task": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v2/Tasks",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Subject": "Follow up call",
                "Status": "Not Started",
                "Due_Date": "2024-12-31",
                "What_Id": {
                  "id": "{deal_id}"
                }
              }
            ]
          }
        },
        "Get Notes": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/Notes",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Note": {
          "scope": "ZohoCRM.modules.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v2/Notes",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "Note_Title": "Meeting summary",
                "Note_Content": "Discussed pricing",
                "Parent_Id": {
                  "id": "{record_id}"
                },
                "se_module": "Contacts"
              }
            ]
          }
        },
        "Get Users": {
          "scope": "ZohoCRM.users.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/users",
          "params": {
            "type": "AllUsers"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Organization": {
          "scope": "ZohoCRM.org.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/org",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Search Records": {
          "scope": "ZohoCRM.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/Contacts/search",
          "params": {
            "criteria": "(Email:equals:john@example.com)"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "COQL Query": {
          "scope": "ZohoCRM.coql.READ",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v2/coql",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "select_query": "select Last_Name, First_Name, Email from Contacts where Email is not null limit 10"
          }
        },
        "Get Modules": {
          "scope": "ZohoCRM.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/settings/modules",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Fields": {
          "scope": "ZohoCRM.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/settings/fields",
          "params": {
            "module": "Contacts"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Bulk Create Records": {
          "scope": "ZohoCRM.bulk.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v2/Contacts/upsert",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": [
              {
                "First_Name": "Alice",
                "Last_Name": "Brown",
                "Email": "alice@example.com"
              },
              {
                "First_Name": "Bob",
                "Last_Name": "Jones",
                "Email": "bob@example.com"
              }
            ],
            "duplicate_check_fields": [
              "Email"
            ]
          }
        },
        "Enable Notifications": {
          "scope": "ZohoCRM.notifications.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v2/actions/watch",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "watch": [
              {
                "channel_id": "1000000068001",
                "events": [
                  "Contacts.create",
                  "Contacts.edit",
                  "Contacts.delete"
                ],
                "channel_expiry": "2024-12-31T00:00:00+05:30",
                "notify_url": "https://your-domain.com/webhook",
                "token": "TOKEN_FOR_VERIFICATION"
              }
            ]
          }
        },
        "Get All Modules (ALL)": {
          "scope": "ZohoCRM.modules.ALL",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/Contacts",
          "params": {
            "page": 1,
            "per_page": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Settings (ALL)": {
          "scope": "ZohoCRM.settings.ALL",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/settings/modules",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Users (ALL)": {
          "scope": "ZohoCRM.users.ALL",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/users",
          "params": {
            "type": "AllUsers"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Org (ALL)": {
          "scope": "ZohoCRM.org.ALL",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/org",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Bulk Jobs": {
          "scope": "ZohoCRM.bulk.ALL",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/bulk/read",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Bulk Read Status": {
          "scope": "ZohoCRM.bulk.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/bulk/read/{job_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Notifications": {
          "scope": "ZohoCRM.notifications.ALL",
          "method": "GET",
          "url": "https://www.zohoapis.com/crm/v2/actions/watch",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Upload File": {
          "scope": "ZohoCRM.Files.ALL",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v2/files",
          "params": {},
          "headers": {
            "Content-Type": "multipart/form-data"
          },
          "body": {
            "filename": "attachment.pdf"
          }
        },
        "Mass Update Records": {
          "scope": "ZohoCRM.mass_update.ALL",
          "method": "POST",
          "url": "https://www.zohoapis.com/crm/v2/Contacts/actions/mass_update",
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
          "url": "https://www.zohoapis.com/books/v3/contacts",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Contact": {
          "scope": "ZohoBooks.contacts.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/contacts",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "contact_name": "John Doe",
            "contact_type": "customer",
            "email": "john@example.com",
            "phone": "1234567890",
            "billing_address": {
              "address": "123 Main St",
              "city": "New York",
              "state": "NY",
              "zip": "10001",
              "country": "USA"
            }
          }
        },
        "Get Invoices": {
          "scope": "ZohoBooks.invoices.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/invoices",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Invoice": {
          "scope": "ZohoBooks.invoices.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/invoices",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "customer_id": "{customer_id}",
            "date": "2024-01-15",
            "due_date": "2024-02-14",
            "line_items": [
              {
                "item_id": "{item_id}",
                "name": "Consulting Services",
                "description": "Monthly retainer",
                "rate": 1000,
                "quantity": 1
              }
            ],
            "notes": "Thank you for your business"
          }
        },
        "Email Invoice": {
          "scope": "ZohoBooks.invoices.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/invoices/{invoice_id}/email",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "send_from_org_email_id": false,
            "to_mail_ids": [
              "customer@example.com"
            ],
            "subject": "Invoice from Your Company",
            "body": "Please find the attached invoice."
          }
        },
        "Get Estimates": {
          "scope": "ZohoBooks.estimates.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/estimates",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Estimate": {
          "scope": "ZohoBooks.estimates.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/estimates",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "customer_id": "{customer_id}",
            "date": "2024-01-15",
            "expiry_date": "2024-02-15",
            "line_items": [
              {
                "name": "Web Development",
                "rate": 5000,
                "quantity": 1
              }
            ]
          }
        },
        "Get Customer Payments": {
          "scope": "ZohoBooks.customerpayments.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/customerpayments",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Customer Payment": {
          "scope": "ZohoBooks.customerpayments.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/customerpayments",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "customer_id": "{customer_id}",
            "payment_mode": "bank_transfer",
            "amount": 1000,
            "date": "2024-01-15",
            "invoices": [
              {
                "invoice_id": "{invoice_id}",
                "amount_applied": 1000
              }
            ]
          }
        },
        "Get Items": {
          "scope": "ZohoBooks.items.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/items",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Item": {
          "scope": "ZohoBooks.items.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/items",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Consulting",
            "description": "Hourly consulting rate",
            "rate": 150,
            "unit": "hrs",
            "account_id": "{account_id}"
          }
        },
        "Get Expenses": {
          "scope": "ZohoBooks.expenses.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/expenses",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Expense": {
          "scope": "ZohoBooks.expenses.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/expenses",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "account_id": "{expense_account_id}",
            "date": "2024-01-15",
            "amount": 250,
            "description": "Office supplies",
            "paid_through_account_id": "{bank_account_id}"
          }
        },
        "Get Bills": {
          "scope": "ZohoBooks.bills.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/bills",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Bill": {
          "scope": "ZohoBooks.bills.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/bills",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "vendor_id": "{vendor_id}",
            "bill_number": "BILL-001",
            "date": "2024-01-15",
            "due_date": "2024-02-14",
            "line_items": [
              {
                "account_id": "{account_id}",
                "name": "Rent",
                "rate": 2000,
                "quantity": 1
              }
            ]
          }
        },
        "Get Purchase Orders": {
          "scope": "ZohoBooks.purchaseorders.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/purchaseorders",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Purchase Order": {
          "scope": "ZohoBooks.purchaseorders.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/purchaseorders",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "vendor_id": "{vendor_id}",
            "purchaseorder_number": "PO-001",
            "date": "2024-01-15",
            "expected_delivery_date": "2024-02-15",
            "line_items": [
              {
                "item_id": "{item_id}",
                "quantity": 5,
                "rate": 100
              }
            ]
          }
        },
        "Get Sales Orders": {
          "scope": "ZohoBooks.salesorders.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/salesorders",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Chart of Accounts": {
          "scope": "ZohoBooks.chartofaccounts.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/chartofaccounts",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Journal": {
          "scope": "ZohoBooks.journals.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/journals",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "date": "2024-01-15",
            "journal_number": "JNL-001",
            "line_items": [
              {
                "account_id": "{debit_account_id}",
                "debit_or_credit": "debit",
                "amount": 500
              },
              {
                "account_id": "{credit_account_id}",
                "debit_or_credit": "credit",
                "amount": 500
              }
            ]
          }
        },
        "Get Balance Sheet": {
          "scope": "ZohoBooks.reports.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/reports/balancesheet",
          "params": {
            "organization_id": "{org_id}",
            "date": "2024-12-31"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Profit and Loss": {
          "scope": "ZohoBooks.reports.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/reports/profitandloss",
          "params": {
            "organization_id": "{org_id}",
            "from_date": "2024-01-01",
            "to_date": "2024-12-31"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
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
        "Update Contact": {
          "scope": "ZohoBooks.contacts.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/books/v3/contacts/{contact_id}",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "contact_name": "John Doe Updated",
            "phone": "9876543210"
          }
        },
        "Delete Contact": {
          "scope": "ZohoBooks.contacts.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/books/v3/contacts/{contact_id}",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Delete Invoice": {
          "scope": "ZohoBooks.invoices.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/books/v3/invoices/{invoice_id}",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Sales Order": {
          "scope": "ZohoBooks.salesorders.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/salesorders",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "customer_id": "{customer_id}",
            "date": "2024-01-15",
            "line_items": [
              {
                "item_id": "{item_id}",
                "quantity": 2,
                "rate": 500
              }
            ]
          }
        },
        "Get Journals": {
          "scope": "ZohoBooks.journals.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/journals",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Bank Accounts": {
          "scope": "ZohoBooks.banking.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/bankaccounts",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Vendor Payments": {
          "scope": "ZohoBooks.vendorpayments.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/vendorpayments",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Vendor Payment": {
          "scope": "ZohoBooks.vendorpayments.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/vendorpayments",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "vendor_id": "{vendor_id}",
            "payment_mode": "bank_transfer",
            "amount": 500,
            "date": "2024-01-15"
          }
        },
        "Get Credit Notes": {
          "scope": "ZohoBooks.creditnotes.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/creditnotes",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Credit Note": {
          "scope": "ZohoBooks.creditnotes.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/books/v3/creditnotes",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "customer_id": "{customer_id}",
            "date": "2024-01-15",
            "line_items": [
              {
                "item_id": "{item_id}",
                "quantity": 1,
                "rate": 100
              }
            ]
          }
        },
        "Get Vendor Credits": {
          "scope": "ZohoBooks.vendorcredits.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/vendorcredits",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Projects": {
          "scope": "ZohoBooks.projects.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/projects",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Full Access (All)": {
          "scope": "ZohoBooks.fullaccess.all",
          "method": "GET",
          "url": "https://www.zohoapis.com/books/v3/organizations",
          "params": {},
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
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Get Ticket By ID": {
          "scope": "Desk.tickets.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Create Ticket": {
          "scope": "Desk.tickets.CREATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/tickets",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": {
            "subject": "Issue with product",
            "departmentId": "{dept_id}",
            "contactId": "{contact_id}",
            "description": "Detailed description of the issue",
            "priority": "medium",
            "status": "Open",
            "channel": "Email"
          }
        },
        "Update Ticket": {
          "scope": "Desk.tickets.UPDATE",
          "method": "PATCH",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": {
            "status": "On Hold",
            "priority": "high",
            "assigneeId": "{agent_id}"
          }
        },
        "Delete Ticket": {
          "scope": "Desk.tickets.DELETE",
          "method": "DELETE",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Get Ticket Comments": {
          "scope": "Desk.tickets.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}/comments",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Add Ticket Comment": {
          "scope": "Desk.tickets.CREATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}/comments",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": {
            "content": "We are looking into this issue.",
            "isPublic": true
          }
        },
        "Send Ticket Reply": {
          "scope": "Desk.tickets.UPDATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/tickets/{ticket_id}/sendReply",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": {
            "content": "Thank you for contacting us. We have resolved your issue.",
            "isPublic": true,
            "channel": "EMAIL",
            "to": [
              {
                "email": "customer@example.com"
              }
            ]
          }
        },
        "Get Contacts": {
          "scope": "Desk.contacts.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/contacts",
          "params": {
            "limit": 50,
            "from": 0
          },
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Create Contact": {
          "scope": "Desk.contacts.CREATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": {
            "lastName": "Doe",
            "firstName": "John",
            "email": "john@example.com",
            "phone": "1234567890",
            "accountId": "{account_id}"
          }
        },
        "Get Accounts": {
          "scope": "Desk.accounts.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/accounts",
          "params": {
            "limit": 50,
            "from": 0
          },
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Create Account": {
          "scope": "Desk.accounts.CREATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/accounts",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": {
            "accountName": "Tech Corp",
            "website": "https://techcorp.com",
            "phone": "1234567890"
          }
        },
        "Get Agents": {
          "scope": "Desk.agents.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/agents",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Get Departments": {
          "scope": "Desk.departments.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/departments",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Get Articles": {
          "scope": "Desk.articles.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/articles",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Create Article": {
          "scope": "Desk.articles.CREATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/articles",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": {
            "title": "How to reset your password",
            "answer": "<p>Steps to reset your password...</p>",
            "categoryId": "{category_id}",
            "status": "Published"
          }
        },
        "Get Tasks": {
          "scope": "Desk.tasks.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/tasks",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Search Tickets": {
          "scope": "Desk.search.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/search",
          "params": {
            "module": "tickets",
            "searchStr": "billing issue"
          },
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Get Ticket Reports": {
          "scope": "Desk.reports.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/reports/ticketstatusreport",
          "params": {
            "from": "2024-01-01",
            "to": "2024-12-31"
          },
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Update Contact": {
          "scope": "Desk.contacts.UPDATE",
          "method": "PATCH",
          "url": "https://desk.zoho.com/api/v1/contacts/{contact_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": {
            "phone": "9876543210"
          }
        },
        "Delete Contact": {
          "scope": "Desk.contacts.DELETE",
          "method": "DELETE",
          "url": "https://desk.zoho.com/api/v1/contacts/{contact_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Create Task": {
          "scope": "Desk.tasks.CREATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/tasks",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": {
            "subject": "Follow up with customer",
            "dueDate": "2024-12-31",
            "ticketId": "{ticket_id}"
          }
        },
        "Get All Tickets (ALL)": {
          "scope": "Desk.tickets.ALL",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/tickets",
          "params": {
            "limit": 50,
            "from": 0
          },
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Get All Articles (ALL)": {
          "scope": "Desk.articles.ALL",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/articles",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Get Settings": {
          "scope": "Desk.settings.ALL",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/organizations",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Get Events": {
          "scope": "Desk.events.ALL",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/activities",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Get Calls": {
          "scope": "Desk.calls.ALL",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/calls",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Get Activities": {
          "scope": "Desk.activities.ALL",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/activities",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Get Macros": {
          "scope": "Desk.macros.ALL",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/macros",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Get All Reports (ALL)": {
          "scope": "Desk.reports.ALL",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/reports",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Get Basic Info (READ)": {
          "scope": "Desk.basic.READ",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/myinfo",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
        },
        "Create Basic Record": {
          "scope": "Desk.basic.CREATE",
          "method": "POST",
          "url": "https://desk.zoho.com/api/v1/tickets",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": {
            "subject": "Basic ticket",
            "departmentId": "{dept_id}",
            "contactId": "{contact_id}"
          }
        },
        "Get All Tasks (ALL scope)": {
          "scope": "Desk.tasks.ALL",
          "method": "GET",
          "url": "https://desk.zoho.com/api/v1/tasks",
          "params": {},
          "headers": {
            "Content-Type": "application/json",
            "orgId": "{org_id}"
          },
          "body": null
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
        "Get Messages": {
          "scope": "ZohoMail.messages.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/messages/view",
          "params": {
            "folderId": "{folder_id}",
            "limit": 50
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
            "ccAddress": "",
            "bccAddress": "",
            "subject": "Test Email",
            "content": "Hello, this is a test email.",
            "mailFormat": "html"
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
        "Move Message": {
          "scope": "ZohoMail.messages.UPDATE",
          "method": "PUT",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/updatemessage",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "messageId": "{message_id}",
            "folderId": "{folder_id}",
            "mode": "move",
            "targetFolderId": "{target_folder_id}"
          }
        },
        "Search Emails": {
          "scope": "ZohoMail.messages.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/messages/search",
          "params": {
            "searchKey": "invoice",
            "limit": 50
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Tags": {
          "scope": "ZohoMail.tags.READ",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/tags",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Messages (ALL)": {
          "scope": "ZohoMail.messages.ALL",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/messages/view",
          "params": {
            "folderId": "{folder_id}",
            "limit": 50
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Folders (ALL)": {
          "scope": "ZohoMail.folders.ALL",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/folders",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Attachments": {
          "scope": "ZohoMail.attachments.ALL",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/folders/{folder_id}/messages/{message_id}/attachments",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Contacts": {
          "scope": "ZohoMail.contacts.ALL",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Calendar Events": {
          "scope": "ZohoMail.calendar.ALL",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/calendar/events",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Mail Settings": {
          "scope": "ZohoMail.settings.ALL",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/settings",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Organization Info": {
          "scope": "ZohoMail.organization.ALL",
          "method": "GET",
          "url": "https://mail.zoho.com/api/organization",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Tags (ALL)": {
          "scope": "ZohoMail.tags.ALL",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/tags",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Email Filters": {
          "scope": "ZohoMail.filters.ALL",
          "method": "GET",
          "url": "https://mail.zoho.com/api/accounts/{account_id}/filters",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
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
        "Get Portals": {
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
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": "name=My+New+Project&description=Project+Description&start_date=01-15-2024&end_date=12-31-2024&owner={user_id}"
        },
        "Get Tasks": {
          "scope": "ZohoProjects.tasks.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasks/",
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
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": "name=Design+Homepage&start_date=01-15-2024&end_date=01-30-2024&priority=high&status=open&description=Create+initial+homepage+design"
        },
        "Update Task": {
          "scope": "ZohoProjects.tasks.UPDATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasks/{task_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": "status=closed&percent_complete=100"
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
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": "name=Phase+1+Complete&end_date=03-31-2024&flag=internal&owner={user_id}"
        },
        "Get Bugs": {
          "scope": "ZohoProjects.bugs.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/bugs/",
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
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": "title=Login+page+crash&description=App+crashes+on+login&severity=major&status=open&type=bug&assignee={user_id}"
        },
        "Get Timesheets": {
          "scope": "ZohoProjects.timesheets.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/logs/",
          "params": {
            "date": "01-01-2024",
            "date_format": "MM-dd-yyyy",
            "bill_status": "All"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Log Time": {
          "scope": "ZohoProjects.timesheets.CREATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasks/{task_id}/logs/",
          "params": {},
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": "date=01-15-2024&hours=2&minutes=30&billing_status=Billable&notes=Development+work"
        },
        "Get All Projects (ALL)": {
          "scope": "ZohoProjects.projects.ALL",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Update Project": {
          "scope": "ZohoProjects.projects.UPDATE",
          "method": "POST",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/",
          "params": {},
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": "name=Updated+Project&status=active"
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
        "Get All Tasks (ALL)": {
          "scope": "ZohoProjects.tasks.ALL",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasks/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
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
        "Get All Milestones (ALL)": {
          "scope": "ZohoProjects.milestones.ALL",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/milestones/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Task Lists": {
          "scope": "ZohoProjects.tasklists.ALL",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasklists/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Bugs (ALL)": {
          "scope": "ZohoProjects.bugs.ALL",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/bugs/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Events": {
          "scope": "ZohoProjects.events.ALL",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/events/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Forums": {
          "scope": "ZohoProjects.forums.ALL",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/forums/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Pages": {
          "scope": "ZohoProjects.pages.ALL",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/pages/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Project Users": {
          "scope": "ZohoProjects.users.ALL",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/users/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Timesheets (ALL)": {
          "scope": "ZohoProjects.timesheets.ALL",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/logs/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Documents": {
          "scope": "ZohoProjects.documents.ALL",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/documents/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Project Status": {
          "scope": "ZohoProjects.status.ALL",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/statuses/",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Search Projects": {
          "scope": "ZohoProjects.search.READ",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/search",
          "params": {
            "search_term": "homepage"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Tags": {
          "scope": "ZohoProjects.tags.ALL",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/tags",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Project Reports": {
          "scope": "ZohoProjects.reports.ALL",
          "method": "GET",
          "url": "https://projectsapi.zoho.com/restapi/portal/{portal_id}/projects/{project_id}/tasksummaryreport/",
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
          "scope": "ZOHOPEOPLE.employee.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/forms/employee/getRecords",
          "params": {
            "sIndex": 1,
            "limit": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Employee By ID": {
          "scope": "ZOHOPEOPLE.employee.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/forms/employee/getDataByID",
          "params": {
            "recordId": "{employee_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Employee": {
          "scope": "ZOHOPEOPLE.employee.CREATE",
          "method": "POST",
          "url": "https://people.zoho.com/people/api/forms/employee/insertRecord",
          "params": {},
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": "inputData=%7B%22First_Name%22%3A%22John%22%2C%22Last_Name%22%3A%22Doe%22%2C%22EmailID%22%3A%22john%40company.com%22%2C%22Department%22%3A%22Engineering%22%7D"
        },
        "Get Leave Types": {
          "scope": "ZOHOPEOPLE.leave.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/leave/getLeaveTypeDetails",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Leave Balance": {
          "scope": "ZOHOPEOPLE.leave.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/leave/getLeaveBalance",
          "params": {
            "userId": "{employee_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Apply Leave": {
          "scope": "ZOHOPEOPLE.leave.CREATE",
          "method": "POST",
          "url": "https://people.zoho.com/people/api/leave/addLeave",
          "params": {},
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": "userId={employee_id}&leaveTypeId={leave_type_id}&from=01-15-2024&to=01-17-2024&leaveCount=3&reason=Vacation"
        },
        "Get Attendance": {
          "scope": "ZOHOPEOPLE.attendance.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/attendance/getUserReport",
          "params": {
            "userId": "{employee_id}",
            "dateFormat": "MM-dd-yyyy",
            "from": "01-01-2024",
            "to": "01-31-2024"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Check In": {
          "scope": "ZOHOPEOPLE.attendance.CREATE",
          "method": "POST",
          "url": "https://people.zoho.com/people/api/attendance/checkIn",
          "params": {},
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": "checktime=2024-01-15 09:00&locationId={location_id}"
        },
        "Get Departments": {
          "scope": "ZOHOPEOPLE.department.READ",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/department",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Update Employee": {
          "scope": "ZOHOPEOPLE.employee.UPDATE",
          "method": "POST",
          "url": "https://people.zoho.com/people/api/forms/employee/updateRecord",
          "params": {},
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": "recordId={employee_id}&inputData=%7B%22Department%22%3A%22Sales%22%7D"
        },
        "Get All Employees": {
          "scope": "ZOHOPEOPLE.employee.ALL",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/forms/employee/getRecords",
          "params": {
            "sIndex": 1,
            "limit": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Leave": {
          "scope": "ZOHOPEOPLE.leave.ALL",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/leave/getLeaveBalance",
          "params": {
            "userId": "{employee_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Attendance": {
          "scope": "ZOHOPEOPLE.attendance.ALL",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/attendance/getUserReport",
          "params": {
            "userId": "{employee_id}",
            "from": "01-01-2024",
            "to": "01-31-2024"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Time Tracker": {
          "scope": "ZOHOPEOPLE.timetracker.ALL",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/timetracker/getbyfilter",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Forms": {
          "scope": "ZOHOPEOPLE.forms.ALL",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/forms",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Appraisals": {
          "scope": "ZOHOPEOPLE.appraisal.ALL",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/appraisal/getrecords",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Training": {
          "scope": "ZOHOPEOPLE.training.ALL",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/training/getrecords",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Departments": {
          "scope": "ZOHOPEOPLE.department.ALL",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/department",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Designations": {
          "scope": "ZOHOPEOPLE.designation.ALL",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/designation",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Feed": {
          "scope": "ZOHOPEOPLE.feed.ALL",
          "method": "GET",
          "url": "https://people.zoho.com/people/api/feed",
          "params": {},
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
                "Posting_Title": "Senior Developer",
                "Job_Type": "Full time",
                "Work_Experience": "3-5",
                "No_of_Positions": 2,
                "Industry": "Technology",
                "Date_Opened": "2024-01-15",
                "Target_Date": "2024-03-15",
                "Job_Status": "Open",
                "Job_Description": "Looking for experienced developer..."
              }
            ]
          }
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
                "Last_Name": "Doe",
                "Email": "jane@example.com",
                "Phone": "1234567890",
                "Experience_in_Years": 5,
                "Current_Job_Title": "Software Engineer"
              }
            ]
          }
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
                "Name": "Technical Interview - Jane Doe",
                "Candidate_Name": {
                  "id": "{candidate_id}"
                },
                "Job_Opening_Name": {
                  "id": "{job_id}"
                },
                "Scheduled_Time": "2024-02-01T10:00:00",
                "Duration": "1 Hr",
                "Status": "Pending"
              }
            ]
          }
        },
        "Associate Candidate to Job": {
          "scope": "ZohoRecruit.modules.UPDATE",
          "method": "PUT",
          "url": "https://recruit.zoho.com/recruit/v2/JobOpenings/{job_id}/Candidates/{candidate_id}/associate",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Delete Record": {
          "scope": "ZohoRecruit.modules.DELETE",
          "method": "DELETE",
          "url": "https://recruit.zoho.com/recruit/v2/Candidates/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Settings": {
          "scope": "ZohoRecruit.settings.ALL",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/settings/modules",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Users": {
          "scope": "ZohoRecruit.users.ALL",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/users",
          "params": {
            "type": "AllUsers"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Organization": {
          "scope": "ZohoRecruit.org.READ",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/org",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Bulk Import Jobs": {
          "scope": "ZohoRecruit.bulk.ALL",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/bulk/read",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Notifications": {
          "scope": "ZohoRecruit.notifications.ALL",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/actions/watch",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Job Boards": {
          "scope": "ZohoRecruit.jobboards.ALL",
          "method": "GET",
          "url": "https://recruit.zoho.com/recruit/v2/jobboards",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Records (ALL)": {
          "scope": "ZohoRecruit.modules.ALL",
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
        "Get Mailing Lists": {
          "scope": "ZohoCampaigns.list.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getmailinglists",
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
        "Create Mailing List": {
          "scope": "ZohoCampaigns.list.CREATE",
          "method": "POST",
          "url": "https://campaigns.zoho.com/api/v1.1/addlist",
          "params": {},
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": "resfmt=JSON&listname=Newsletter+Subscribers&signupFormName=Newsletter+Signup"
        },
        "Add Contact to List": {
          "scope": "ZohoCampaigns.contact.CREATE",
          "method": "POST",
          "url": "https://campaigns.zoho.com/api/v1.1/json/listsubscribe",
          "params": {},
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": "resfmt=JSON&listkey={list_key}&contactinfo=%7B%22Contact+Email%22%3A%22john%40example.com%22%2C%22First+Name%22%3A%22John%22%2C%22Last+Name%22%3A%22Doe%22%7D"
        },
        "Remove Contact from List": {
          "scope": "ZohoCampaigns.contact.DELETE",
          "method": "POST",
          "url": "https://campaigns.zoho.com/api/v1.1/json/listunsubscribe",
          "params": {},
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": "resfmt=JSON&listkey={list_key}&contactinfo=%7B%22Contact+Email%22%3A%22john%40example.com%22%7D"
        },
        "Get Campaigns": {
          "scope": "ZohoCampaigns.campaign.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getcampaigns",
          "params": {
            "resfmt": "JSON",
            "campaignstatus": "all",
            "fromindex": 1,
            "range": 50
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Campaign Report": {
          "scope": "ZohoCampaigns.report.READ",
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
        "Get Contact Details": {
          "scope": "ZohoCampaigns.contact.READ",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/contact/details",
          "params": {
            "resfmt": "JSON",
            "email": "{email}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Contacts (ALL)": {
          "scope": "ZohoCampaigns.contact.ALL",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/contact/details",
          "params": {
            "resfmt": "JSON"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Campaigns (ALL)": {
          "scope": "ZohoCampaigns.campaign.ALL",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getcampaigns",
          "params": {
            "resfmt": "JSON",
            "campaignstatus": "all"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Lists (ALL)": {
          "scope": "ZohoCampaigns.list.ALL",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getmailinglists",
          "params": {
            "resfmt": "JSON"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Topics": {
          "scope": "ZohoCampaigns.topic.ALL",
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
        "Get Autoresponders": {
          "scope": "ZohoCampaigns.autoresponder.ALL",
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
        "Send Email Campaign": {
          "scope": "ZohoCampaigns.email.ALL",
          "method": "POST",
          "url": "https://campaigns.zoho.com/api/v1.1/sendcampaign",
          "params": {},
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": "resfmt=JSON&campaignkey={campaign_key}"
        },
        "Get Tags": {
          "scope": "ZohoCampaigns.tag.ALL",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/gettags",
          "params": {
            "resfmt": "JSON"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Segments": {
          "scope": "ZohoCampaigns.segment.ALL",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getsegments",
          "params": {
            "resfmt": "JSON"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Workflows": {
          "scope": "ZohoCampaigns.workflow.ALL",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getworkflows",
          "params": {
            "resfmt": "JSON"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Signup Forms": {
          "scope": "ZohoCampaigns.signup.ALL",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/getsignupforms",
          "params": {
            "resfmt": "JSON"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Templates": {
          "scope": "ZohoCampaigns.template.ALL",
          "method": "GET",
          "url": "https://campaigns.zoho.com/api/v1.1/gettemplates",
          "params": {
            "resfmt": "JSON"
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
          "url": "https://www.zohoapis.com/inventory/v1/items",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Item": {
          "scope": "ZohoInventory.items.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/items",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Laptop",
            "sku": "LAPTOP-001",
            "unit": "pcs",
            "rate": 999.99,
            "purchase_rate": 750,
            "initial_stock": 50,
            "initial_stock_rate": 750,
            "product_type": "goods"
          }
        },
        "Get Contacts": {
          "scope": "ZohoInventory.contacts.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/contacts",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Sales Order": {
          "scope": "ZohoInventory.salesorders.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/salesorders",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "customer_id": "{customer_id}",
            "salesorder_number": "SO-001",
            "date": "2024-01-15",
            "shipment_date": "2024-01-20",
            "line_items": [
              {
                "item_id": "{item_id}",
                "quantity": 5,
                "rate": 999.99
              }
            ]
          }
        },
        "Get Warehouses": {
          "scope": "ZohoInventory.warehouses.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/warehouses",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Package": {
          "scope": "ZohoInventory.packages.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/packages",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "salesorder_id": "{salesorder_id}",
            "package_number": "PKG-001",
            "date": "2024-01-17",
            "line_items": [
              {
                "so_line_item_id": "{line_item_id}",
                "quantity": 5
              }
            ]
          }
        },
        "Create Shipment": {
          "scope": "ZohoInventory.shipments.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/shipmentorders",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "salesorder_id": "{salesorder_id}",
            "package_ids": [
              "{package_id}"
            ],
            "date": "2024-01-18",
            "carrier": "FedEx",
            "tracking_number": "TRACK123456"
          }
        },
        "Get Inventory Reports": {
          "scope": "ZohoInventory.reports.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/reports/inventoryvaluation",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Contact": {
          "scope": "ZohoInventory.contacts.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/contacts",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "contact_name": "Tech Corp",
            "contact_type": "customer",
            "email": "contact@techcorp.com"
          }
        },
        "Get Invoices": {
          "scope": "ZohoInventory.invoices.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/invoices",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Invoice": {
          "scope": "ZohoInventory.invoices.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/invoices",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "customer_id": "{customer_id}",
            "salesorder_id": "{salesorder_id}",
            "date": "2024-01-15"
          }
        },
        "Get Sales Orders": {
          "scope": "ZohoInventory.salesorders.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/salesorders",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Purchase Orders": {
          "scope": "ZohoInventory.purchaseorders.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/purchaseorders",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Purchase Order": {
          "scope": "ZohoInventory.purchaseorders.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/purchaseorders",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "vendor_id": "{vendor_id}",
            "date": "2024-01-15",
            "line_items": [
              {
                "item_id": "{item_id}",
                "quantity": 10,
                "rate": 50
              }
            ]
          }
        },
        "Get Bills": {
          "scope": "ZohoInventory.bills.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/bills",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Bill": {
          "scope": "ZohoInventory.bills.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/inventory/v1/bills",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "vendor_id": "{vendor_id}",
            "bill_number": "BILL-001",
            "date": "2024-01-15",
            "line_items": [
              {
                "item_id": "{item_id}",
                "quantity": 5,
                "rate": 100
              }
            ]
          }
        },
        "Get All Packages (ALL)": {
          "scope": "ZohoInventory.packages.ALL",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/packages",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Shipments (ALL)": {
          "scope": "ZohoInventory.shipments.ALL",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/shipmentorders",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Update Item": {
          "scope": "ZohoInventory.items.UPDATE",
          "method": "PUT",
          "url": "https://www.zohoapis.com/inventory/v1/items/{item_id}",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "rate": 1099.99,
            "initial_stock": 75
          }
        },
        "Delete Item": {
          "scope": "ZohoInventory.items.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/inventory/v1/items/{item_id}",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Full Access (All)": {
          "scope": "ZohoInventory.fullaccess.all",
          "method": "GET",
          "url": "https://www.zohoapis.com/inventory/v1/items",
          "params": {
            "organization_id": "{org_id}"
          },
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
          "scope": "ZohoAnalytics.workspace.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Views": {
          "scope": "ZohoAnalytics.report.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/views",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Data": {
          "scope": "ZohoAnalytics.data.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/views/{view_id}/data",
          "params": {
            "CONFIG": "{\"maximumRows\":200}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Add Row": {
          "scope": "ZohoAnalytics.data.CREATE",
          "method": "POST",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/views/{view_id}/rows",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "CONFIG": "{}",
            "columns": {
              "Column1": "Value1",
              "Column2": "Value2"
            }
          }
        },
        "Update Row": {
          "scope": "ZohoAnalytics.data.UPDATE",
          "method": "PUT",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/views/{view_id}/rows",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "CONFIG": "{\"criteria\":\"\\\"Column1\\\" = 'Value1'\"}",
            "columns": {
              "Column2": "NewValue"
            }
          }
        },
        "Delete Rows": {
          "scope": "ZohoAnalytics.data.DELETE",
          "method": "DELETE",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/views/{view_id}/rows",
          "params": {
            "CONFIG": "{\"criteria\":\"\\\"ID\\\" = 100\"}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Import Data (CSV)": {
          "scope": "ZohoAnalytics.data.CREATE",
          "method": "POST",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/views/{view_id}/import",
          "params": {},
          "headers": {
            "Content-Type": "multipart/form-data"
          },
          "body": {
            "CONFIG": "{\"importType\":\"append\"}",
            "FILE": "<CSV_FILE>"
          }
        },
        "Export Data": {
          "scope": "ZohoAnalytics.data.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/views/{view_id}/export",
          "params": {
            "CONFIG": "{\"fileType\":\"csv\"}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Report": {
          "scope": "ZohoAnalytics.report.CREATE",
          "method": "POST",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/views",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "CONFIG": "{}",
            "viewName": "New Report",
            "viewType": "table"
          }
        },
        "Create Workspace": {
          "scope": "ZohoAnalytics.workspace.CREATE",
          "method": "POST",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "CONFIG": "{}",
            "workspaceName": "My Analytics Workspace"
          }
        },
        "Get Sharing Info": {
          "scope": "ZohoAnalytics.share.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/views/{view_id}/share",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get User Management": {
          "scope": "ZohoAnalytics.usermanagement.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/users",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Embedded Analytics": {
          "scope": "ZohoAnalytics.embeddedanalytics.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/views/{view_id}/publish",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Data Sources": {
          "scope": "ZohoAnalytics.datasource.READ",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces/{workspace_id}/datasources",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Full Access (All)": {
          "scope": "ZohoAnalytics.fullaccess.all",
          "method": "GET",
          "url": "https://analyticsapi.zoho.com/api/v2/workspaces",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
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
        "Get Documents": {
          "scope": "ZohoSign.documents.READ",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/requests",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Send Document for Signature": {
          "scope": "ZohoSign.documents.CREATE",
          "method": "POST",
          "url": "https://sign.zoho.com/api/v1/requests",
          "params": {},
          "headers": {
            "Content-Type": "multipart/form-data"
          },
          "body": {
            "data": "{\"requests\":{\"request_name\":\"NDA Agreement\",\"expiration_days\":30,\"is_sequential\":true,\"actions\":[{\"action_type\":\"SIGN\",\"recipient_name\":\"John Doe\",\"recipient_email\":\"john@example.com\",\"signing_order\":1,\"fields\":[{\"field_type_name\":\"Signature\",\"document_id\":\"{doc_id}\",\"page_no\":1,\"x_value\":100,\"y_value\":200,\"width\":200,\"height\":50}]}]}}",
            "file": "<FILE>"
          }
        },
        "Get Document Status": {
          "scope": "ZohoSign.documents.READ",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/requests/{request_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Download Signed Document": {
          "scope": "ZohoSign.documents.READ",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/requests/{request_id}/pdf",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Revoke Document": {
          "scope": "ZohoSign.documents.UPDATE",
          "method": "POST",
          "url": "https://sign.zoho.com/api/v1/requests/{request_id}/revoke",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "reason": "Document revision required"
          }
        },
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
        "Send via Template": {
          "scope": "ZohoSign.templates.CREATE",
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
                  "Company Name": "ABC Corp"
                }
              },
              "actions": [
                {
                  "action_type": "SIGN",
                  "role": "Signee",
                  "recipient_name": "John Doe",
                  "recipient_email": "john@example.com"
                }
              ]
            }
          }
        },
        "Get All Documents (ALL)": {
          "scope": "ZohoSign.documents.ALL",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/requests",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Delete Document": {
          "scope": "ZohoSign.documents.DELETE",
          "method": "DELETE",
          "url": "https://sign.zoho.com/api/v1/requests/{request_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Templates (ALL)": {
          "scope": "ZohoSign.templates.ALL",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/templates",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Contacts": {
          "scope": "ZohoSign.contacts.ALL",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Settings": {
          "scope": "ZohoSign.settings.ALL",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/settings",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Sign Reports": {
          "scope": "ZohoSign.reports.READ",
          "method": "GET",
          "url": "https://sign.zoho.com/api/v1/reports",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Bulk Send Document": {
          "scope": "ZohoSign.bulksend.ALL",
          "method": "POST",
          "url": "https://sign.zoho.com/api/v1/bulkrequests",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "templates": {
              "template_id": "{template_id}",
              "actions": [
                {
                  "action_type": "SIGN",
                  "recipient_email": "user@example.com"
                }
              ]
            }
          }
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
          "scope": "WorkDrive.teams.READ",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/teams",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Workspaces": {
          "scope": "WorkDrive.workspace.READ",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/workspaces",
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
          "params": {
            "parent_id": "{folder_id}"
          },
          "headers": {
            "Content-Type": "multipart/form-data"
          },
          "body": {
            "content": "<FILE_CONTENT>",
            "filename": "document.pdf",
            "override-name-exist": false
          }
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
                "name": "New Folder",
                "parent_id": "{parent_id}"
              },
              "type": "files"
            }
          }
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
                "name": "Renamed Document"
              },
              "id": "{file_id}",
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
        "Create Share Link": {
          "scope": "WorkDrive.links.CREATE",
          "method": "POST",
          "url": "https://workdrive.zoho.com/api/v1/links",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": {
              "attributes": {
                "resource_id": "{file_id}",
                "resource_type": "files",
                "link_type": "1",
                "share_type": "0"
              }
            }
          }
        },
        "Get All Workspaces (ALL)": {
          "scope": "WorkDrive.workspace.ALL",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/workspaces",
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
                "name": "New Workspace",
                "team_id": "{team_id}"
              },
              "type": "workspaces"
            }
          }
        },
        "Get All Files (ALL)": {
          "scope": "WorkDrive.files.ALL",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/files/{folder_id}/files",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Links (ALL)": {
          "scope": "WorkDrive.links.ALL",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/links",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Link Details": {
          "scope": "WorkDrive.links.READ",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/links/{link_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Teams (ALL)": {
          "scope": "WorkDrive.teams.ALL",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/teams",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Settings": {
          "scope": "WorkDrive.settings.ALL",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/settings",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Labels": {
          "scope": "WorkDrive.labels.ALL",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/labels",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Shared Files": {
          "scope": "WorkDrive.share.ALL",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/files/{file_id}/permissions",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Users": {
          "scope": "WorkDrive.users.ALL",
          "method": "GET",
          "url": "https://workdrive.zoho.com/api/v1/teams/{team_id}/members",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
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
        "Create Channel": {
          "scope": "ZohoCliq.channels.CREATE",
          "method": "POST",
          "url": "https://cliq.zoho.com/api/v2/channels",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "project-updates",
            "description": "Channel for project updates",
            "type": "open"
          }
        },
        "Send Message to Channel": {
          "scope": "ZohoCliq.messages.CREATE",
          "method": "POST",
          "url": "https://cliq.zoho.com/api/v2/channels/{channel_unique_name}/message",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "text": "Hello Team! 🎉",
            "bot": {
              "name": "Notifier"
            }
          }
        },
        "Send Direct Message": {
          "scope": "ZohoCliq.messages.CREATE",
          "method": "POST",
          "url": "https://cliq.zoho.com/api/v2/chats/{chat_id}/message",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "text": "Hey, can we chat?"
          }
        },
        "Get Messages": {
          "scope": "ZohoCliq.messages.READ",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/channels/{channel_unique_name}/messages",
          "params": {
            "from": 1,
            "limit": 50
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Contacts": {
          "scope": "ZohoCliq.contacts.READ",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Channels (ALL)": {
          "scope": "ZohoCliq.channels.ALL",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/channels",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Messages (ALL)": {
          "scope": "ZohoCliq.messages.ALL",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/channels/{channel_unique_name}/messages",
          "params": {
            "from": 1,
            "limit": 50
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Bots": {
          "scope": "ZohoCliq.bots.ALL",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/bots",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Teams": {
          "scope": "ZohoCliq.teams.READ",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/teams",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Files": {
          "scope": "ZohoCliq.files.ALL",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/files",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Webhooks": {
          "scope": "ZohoCliq.webhooks.ALL",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/webhooks",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Reminders": {
          "scope": "ZohoCliq.reminders.ALL",
          "method": "GET",
          "url": "https://cliq.zoho.com/api/v2/reminders",
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
          "scope": "ZohoCreator.meta.READ",
          "method": "GET",
          "url": "https://creator.zoho.com/api/v2/applications",
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
            "from": 1,
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
        "Get Forms": {
          "scope": "ZohoCreator.meta.READ",
          "method": "GET",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/forms",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Reports (ALL)": {
          "scope": "ZohoCreator.report.ALL",
          "method": "GET",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/report/{report_link_name}",
          "params": {
            "from": 1,
            "limit": 200
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Forms (ALL)": {
          "scope": "ZohoCreator.form.ALL",
          "method": "GET",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/forms",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Form by Name": {
          "scope": "ZohoCreator.form.READ",
          "method": "GET",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/form/{form_link_name}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Metadata (ALL)": {
          "scope": "ZohoCreator.meta.ALL",
          "method": "GET",
          "url": "https://creator.zoho.com/api/v2/applications",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Report View": {
          "scope": "ZohoCreator.report.CREATE",
          "method": "POST",
          "url": "https://creator.zoho.com/api/v2/{owner_name}/{app_link_name}/report",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "data": {
              "reportName": "New Report",
              "viewType": "list"
            }
          }
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
          "url": "https://flow.zoho.com/api/v1/{org_id}/flows",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Flow Details": {
          "scope": "ZohoFlow.flows.READ",
          "method": "GET",
          "url": "https://flow.zoho.com/api/v1/{org_id}/flows/{flow_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Enable Flow": {
          "scope": "ZohoFlow.flows.UPDATE",
          "method": "PATCH",
          "url": "https://flow.zoho.com/api/v1/{org_id}/flows/{flow_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "enabled": true
          }
        },
        "Get Connections": {
          "scope": "ZohoFlow.connections.READ",
          "method": "GET",
          "url": "https://flow.zoho.com/api/v1/{org_id}/connections",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Flows (ALL)": {
          "scope": "ZohoFlow.flows.ALL",
          "method": "GET",
          "url": "https://flow.zoho.com/api/v1/{org_id}/flows",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Flow": {
          "scope": "ZohoFlow.flows.CREATE",
          "method": "POST",
          "url": "https://flow.zoho.com/api/v1/{org_id}/flows",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Auto Notify Flow",
            "description": "Sends notification on trigger"
          }
        },
        "Delete Flow": {
          "scope": "ZohoFlow.flows.DELETE",
          "method": "DELETE",
          "url": "https://flow.zoho.com/api/v1/{org_id}/flows/{flow_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Connections (ALL)": {
          "scope": "ZohoFlow.connections.ALL",
          "method": "GET",
          "url": "https://flow.zoho.com/api/v1/{org_id}/connections",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Dashboard": {
          "scope": "ZohoFlow.dashboards.READ",
          "method": "GET",
          "url": "https://flow.zoho.com/api/v1/{org_id}/dashboard",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
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
        "Get Social Connections": {
          "scope": "ZohoSocial.connections.READ",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/{portal_id}/connections",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Schedule Post": {
          "scope": "ZohoSocial.publish.CREATE",
          "method": "POST",
          "url": "https://social.zoho.com/api/v1/{portal_id}/post",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "content": "Check out our new product launch! 🚀",
            "scheduleTime": "2024-02-01T10:00:00Z",
            "connections": [
              {
                "connectionId": "{connection_id}",
                "connectionType": "facebook"
              }
            ]
          }
        },
        "Publish Post Now": {
          "scope": "ZohoSocial.publish.CREATE",
          "method": "POST",
          "url": "https://social.zoho.com/api/v1/{portal_id}/post",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "content": "Exciting news! We just launched...",
            "publishNow": true,
            "connections": [
              {
                "connectionId": "{connection_id}",
                "connectionType": "twitter"
              }
            ]
          }
        },
        "Get Reports": {
          "scope": "ZohoSocial.reports.READ",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/{portal_id}/reports",
          "params": {
            "from": "2024-01-01",
            "to": "2024-01-31"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Portals (ALL)": {
          "scope": "ZohoSocial.portals.ALL",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/portals",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Posts (ALL)": {
          "scope": "ZohoSocial.publish.ALL",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/{portal_id}/posts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Monitoring Feeds": {
          "scope": "ZohoSocial.monitoring.READ",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/{portal_id}/monitoring",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Team Feed": {
          "scope": "ZohoSocial.teamfeed.ALL",
          "method": "GET",
          "url": "https://social.zoho.com/api/v1/{portal_id}/teamfeed",
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
            "category": "CustomerFeedback"
          }
        },
        "Get Survey Responses": {
          "scope": "ZohoSurvey.responses.READ",
          "method": "GET",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}/responses",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Collectors": {
          "scope": "ZohoSurvey.collectors.READ",
          "method": "GET",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}/collectors",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Survey Report": {
          "scope": "ZohoSurvey.reports.READ",
          "method": "GET",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}/report",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Surveys (ALL)": {
          "scope": "ZohoSurvey.surveys.ALL",
          "method": "GET",
          "url": "https://survey.zoho.com/api/v1/surveys",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Contacts": {
          "scope": "ZohoSurvey.contacts.ALL",
          "method": "GET",
          "url": "https://survey.zoho.com/api/v1/contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Collectors (ALL)": {
          "scope": "ZohoSurvey.collectors.ALL",
          "method": "GET",
          "url": "https://survey.zoho.com/api/v1/surveys/{survey_id}/collectors",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Survey Templates": {
          "scope": "ZohoSurvey.templates.READ",
          "method": "GET",
          "url": "https://survey.zoho.com/api/v1/templates",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
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
        "Get Expenses": {
          "scope": "ZohoExpense.expense.READ",
          "method": "GET",
          "url": "https://expense.zoho.com/api/v1/expenses",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Expense": {
          "scope": "ZohoExpense.expense.CREATE",
          "method": "POST",
          "url": "https://expense.zoho.com/api/v1/expenses",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "expense_date": "2024-01-15",
            "account_id": "{account_id}",
            "total": 150,
            "description": "Team lunch",
            "currency_id": "{currency_id}",
            "paid_through_account_id": "{payment_account_id}"
          }
        },
        "Get Expense Reports": {
          "scope": "ZohoExpense.reports.READ",
          "method": "GET",
          "url": "https://expense.zoho.com/api/v1/expensereports",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Expense Report": {
          "scope": "ZohoExpense.reports.CREATE",
          "method": "POST",
          "url": "https://expense.zoho.com/api/v1/expensereports",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "report_name": "January 2024 Expenses",
            "description": "Monthly expense report",
            "start_date": "2024-01-01",
            "end_date": "2024-01-31"
          }
        },
        "Submit Expense Report": {
          "scope": "ZohoExpense.reports.UPDATE",
          "method": "POST",
          "url": "https://expense.zoho.com/api/v1/expensereports/{report_id}/submit",
          "params": {
            "organization_id": "{org_id}"
          },
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
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Update Expense": {
          "scope": "ZohoExpense.expense.UPDATE",
          "method": "PUT",
          "url": "https://expense.zoho.com/api/v1/expenses/{expense_id}",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "total": 200,
            "description": "Updated expense"
          }
        },
        "Delete Expense": {
          "scope": "ZohoExpense.expense.DELETE",
          "method": "DELETE",
          "url": "https://expense.zoho.com/api/v1/expenses/{expense_id}",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Trips (ALL)": {
          "scope": "ZohoExpense.trips.ALL",
          "method": "GET",
          "url": "https://expense.zoho.com/api/v1/trips",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Advances": {
          "scope": "ZohoExpense.advances.ALL",
          "method": "GET",
          "url": "https://expense.zoho.com/api/v1/advances",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Expense Settings": {
          "scope": "ZohoExpense.settings.READ",
          "method": "GET",
          "url": "https://expense.zoho.com/api/v1/settings",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Expense Users": {
          "scope": "ZohoExpense.users.READ",
          "method": "GET",
          "url": "https://expense.zoho.com/api/v1/users",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Full Access (All)": {
          "scope": "ZohoExpense.fullaccess.all",
          "method": "GET",
          "url": "https://expense.zoho.com/api/v1/expenses",
          "params": {
            "organization_id": "{org_id}"
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
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Customer": {
          "scope": "ZohoSubscriptions.customers.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/billing/v1/customers",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "display_name": "Tech Corp",
            "email": "billing@techcorp.com",
            "phone": "1234567890",
            "billing_address": {
              "street": "123 Main St",
              "city": "New York",
              "state": "NY",
              "zip": "10001",
              "country": "US"
            }
          }
        },
        "Get Plans": {
          "scope": "ZohoSubscriptions.plans.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/plans",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Plan": {
          "scope": "ZohoSubscriptions.plans.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/billing/v1/plans",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "plan_code": "monthly-pro",
            "name": "Pro Monthly",
            "recurring_price": 99.99,
            "interval": 1,
            "interval_unit": "months",
            "billing_cycles": -1,
            "product_id": "{product_id}"
          }
        },
        "Get Subscriptions": {
          "scope": "ZohoSubscriptions.subscriptions.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/subscriptions",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Subscription": {
          "scope": "ZohoSubscriptions.subscriptions.CREATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/billing/v1/subscriptions",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "customer_id": "{customer_id}",
            "plan": {
              "plan_code": "monthly-pro",
              "quantity": 1
            },
            "starts_at": "2024-01-15"
          }
        },
        "Cancel Subscription": {
          "scope": "ZohoSubscriptions.subscriptions.UPDATE",
          "method": "POST",
          "url": "https://www.zohoapis.com/billing/v1/subscriptions/{subscription_id}/cancel",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "cancel_at_end": true
          }
        },
        "Get Invoices": {
          "scope": "ZohoSubscriptions.invoices.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/invoices",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Addons": {
          "scope": "ZohoSubscriptions.addons.ALL",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/addons",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Coupons": {
          "scope": "ZohoSubscriptions.coupons.ALL",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/coupons",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Payments": {
          "scope": "ZohoSubscriptions.payments.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/payments",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Credit Notes": {
          "scope": "ZohoSubscriptions.creditnotes.ALL",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/creditnotes",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Products": {
          "scope": "ZohoSubscriptions.products.ALL",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/products",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Subscription Reports": {
          "scope": "ZohoSubscriptions.reports.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/reports",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Subscription Settings": {
          "scope": "ZohoSubscriptions.settings.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/settings",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Full Access (All)": {
          "scope": "ZohoSubscriptions.fullaccess.all",
          "method": "GET",
          "url": "https://www.zohoapis.com/billing/v1/customers",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
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
        "Get Employees": {
          "scope": "ZohoPayroll.employees.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/employees",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Employee": {
          "scope": "ZohoPayroll.employees.CREATE",
          "method": "POST",
          "url": "https://payroll.zoho.com/api/v1/employees",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "first_name": "John",
            "last_name": "Doe",
            "email": "john@company.com",
            "date_of_joining": "2024-01-15",
            "designation": "Software Engineer",
            "department": "Engineering",
            "pay_frequency": "Monthly"
          }
        },
        "Get Pay Runs": {
          "scope": "ZohoPayroll.payrun.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/payruns",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Pay Run": {
          "scope": "ZohoPayroll.payrun.CREATE",
          "method": "POST",
          "url": "https://payroll.zoho.com/api/v1/payruns",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "pay_schedule_id": "{schedule_id}",
            "start_date": "2024-01-01",
            "end_date": "2024-01-31"
          }
        },
        "Get Payslips": {
          "scope": "ZohoPayroll.payrun.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/payruns/{payrun_id}/payslips",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Pay Schedules": {
          "scope": "ZohoPayroll.payschedule.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/payschedules",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Payroll Reports": {
          "scope": "ZohoPayroll.reports.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/reports/payrollsummary",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Payroll Settings": {
          "scope": "ZohoPayroll.settings.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/settings",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Tax Info": {
          "scope": "ZohoPayroll.taxes.READ",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/taxes",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Loans": {
          "scope": "ZohoPayroll.loans.ALL",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/loans",
          "params": {
            "organization_id": "{org_id}"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Full Access (All)": {
          "scope": "ZohoPayroll.fullaccess.all",
          "method": "GET",
          "url": "https://payroll.zoho.com/api/v1/employees",
          "params": {
            "organization_id": "{org_id}"
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
        "Get Teams": {
          "scope": "ZohoSprints.projects.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/teams",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Projects": {
          "scope": "ZohoSprints.projects.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/teams/{team_id}/projects",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Project": {
          "scope": "ZohoSprints.projects.CREATE",
          "method": "POST",
          "url": "https://sprints.zoho.com/apiv2/teams/{team_id}/projects",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "E-Commerce Redesign",
            "description": "Full redesign of e-commerce platform",
            "startdate": "01-15-2024",
            "enddate": "06-30-2024"
          }
        },
        "Get Sprints": {
          "scope": "ZohoSprints.sprints.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/teams/{team_id}/projects/{project_id}/sprints",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Sprint": {
          "scope": "ZohoSprints.sprints.CREATE",
          "method": "POST",
          "url": "https://sprints.zoho.com/apiv2/teams/{team_id}/projects/{project_id}/sprints",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Sprint 1",
            "startdate": "01-15-2024",
            "enddate": "01-29-2024",
            "goal": "Complete homepage redesign"
          }
        },
        "Get Work Items": {
          "scope": "ZohoSprints.items.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/teams/{team_id}/projects/{project_id}/sprints/{sprint_id}/item",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Work Item": {
          "scope": "ZohoSprints.items.CREATE",
          "method": "POST",
          "url": "https://sprints.zoho.com/apiv2/teams/{team_id}/projects/{project_id}/sprints/{sprint_id}/item",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "name": "Design product page",
            "description": "Create responsive product page design",
            "priority": "High",
            "storypoints": 5,
            "type": "story"
          }
        },
        "Get All Projects (ALL)": {
          "scope": "ZohoSprints.projects.ALL",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/teams/{team_id}/projects",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Sprints (ALL)": {
          "scope": "ZohoSprints.sprints.ALL",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/teams/{team_id}/projects/{project_id}/sprints",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Items (ALL)": {
          "scope": "ZohoSprints.items.ALL",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/teams/{team_id}/projects/{project_id}/sprints/{sprint_id}/item",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Epics": {
          "scope": "ZohoSprints.epic.ALL",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/teams/{team_id}/projects/{project_id}/epic",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Boards": {
          "scope": "ZohoSprints.boards.ALL",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/teams/{team_id}/projects/{project_id}/boards",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Sprint Reports": {
          "scope": "ZohoSprints.reports.READ",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/teams/{team_id}/projects/{project_id}/reports",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Sprint Users": {
          "scope": "ZohoSprints.users.ALL",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/teams/{team_id}/projects/{project_id}/users",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Timesheets": {
          "scope": "ZohoSprints.timesheets.ALL",
          "method": "GET",
          "url": "https://sprints.zoho.com/apiv2/teams/{team_id}/projects/{project_id}/timelogs",
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
        "Get Meetings": {
          "scope": "ZohoMeeting.meeting.READ",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/{org_id}/sessions",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Meeting": {
          "scope": "ZohoMeeting.meeting.CREATE",
          "method": "POST",
          "url": "https://meeting.zoho.com/api/v1/{org_id}/sessions",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "topic": "Weekly Team Sync",
            "agenda": "Discuss project progress",
            "start_time": "2024-02-01T10:00:00Z",
            "duration": 60,
            "timezone": "America/New_York",
            "password": "Meet@123",
            "settings": {
              "host_video": true,
              "participant_video": true,
              "waiting_room": true
            }
          }
        },
        "Update Meeting": {
          "scope": "ZohoMeeting.meeting.UPDATE",
          "method": "PUT",
          "url": "https://meeting.zoho.com/api/v1/{org_id}/sessions/{meeting_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "topic": "Updated Team Sync",
            "start_time": "2024-02-01T11:00:00Z"
          }
        },
        "Delete Meeting": {
          "scope": "ZohoMeeting.meeting.DELETE",
          "method": "DELETE",
          "url": "https://meeting.zoho.com/api/v1/{org_id}/sessions/{meeting_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Webinar": {
          "scope": "ZohoMeeting.webinar.CREATE",
          "method": "POST",
          "url": "https://meeting.zoho.com/api/v1/{org_id}/webinars",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "topic": "Product Launch Webinar",
            "agenda": "Introducing our new features",
            "start_time": "2024-03-15T14:00:00Z",
            "duration": 90,
            "timezone": "America/New_York"
          }
        },
        "Get Recordings": {
          "scope": "ZohoMeeting.recording.READ",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/{org_id}/sessions/{meeting_id}/recordings",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Meetings (ALL)": {
          "scope": "ZohoMeeting.meeting.ALL",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/{org_id}/sessions",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Webinars (ALL)": {
          "scope": "ZohoMeeting.webinar.ALL",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/{org_id}/webinars",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Recordings (ALL)": {
          "scope": "ZohoMeeting.recording.ALL",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/{org_id}/sessions/{meeting_id}/recordings",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Meeting Contacts": {
          "scope": "ZohoMeeting.contacts.READ",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/{org_id}/contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Meeting Reports": {
          "scope": "ZohoMeeting.reports.READ",
          "method": "GET",
          "url": "https://meeting.zoho.com/api/v1/{org_id}/reports",
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
        "Get Secrets": {
          "scope": "ZohoVault.secrets.READ",
          "method": "GET",
          "url": "https://vault.zoho.com/api/v1/secrets",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Secret By ID": {
          "scope": "ZohoVault.secrets.READ",
          "method": "GET",
          "url": "https://vault.zoho.com/api/v1/secrets/{secret_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Secret": {
          "scope": "ZohoVault.secrets.CREATE",
          "method": "POST",
          "url": "https://vault.zoho.com/api/v1/secrets",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "secretname": "AWS API Key",
            "secretvalue": "AKIAIOSFODNN7EXAMPLE",
            "note": "Production AWS key",
            "folderid": "{folder_id}"
          }
        },
        "Update Secret": {
          "scope": "ZohoVault.secrets.UPDATE",
          "method": "PUT",
          "url": "https://vault.zoho.com/api/v1/secrets/{secret_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "secretvalue": "NEWVALUE123456",
            "note": "Rotated on 2024-01-15"
          }
        },
        "Get Folders": {
          "scope": "ZohoVault.folders.READ",
          "method": "GET",
          "url": "https://vault.zoho.com/api/v1/folders",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Secrets (ALL)": {
          "scope": "ZohoVault.secrets.ALL",
          "method": "GET",
          "url": "https://vault.zoho.com/api/v1/secrets",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Delete Secret": {
          "scope": "ZohoVault.secrets.DELETE",
          "method": "DELETE",
          "url": "https://vault.zoho.com/api/v1/secrets/{secret_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Folders (ALL)": {
          "scope": "ZohoVault.folders.ALL",
          "method": "GET",
          "url": "https://vault.zoho.com/api/v1/folders",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Vault Users": {
          "scope": "ZohoVault.users.ALL",
          "method": "GET",
          "url": "https://vault.zoho.com/api/v1/users",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Vault Settings": {
          "scope": "ZohoVault.settings.READ",
          "method": "GET",
          "url": "https://vault.zoho.com/api/v1/settings",
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
          "params": {},
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
        "Get Groups": {
          "scope": "ZohoConnect.groups.READ",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/{network_id}/groups",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Group": {
          "scope": "ZohoConnect.groups.CREATE",
          "method": "POST",
          "url": "https://connect.zoho.com/api/v1/{network_id}/groups",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "groupName": "Marketing Team",
            "description": "Group for marketing discussions",
            "isPrivate": false
          }
        },
        "Post to Stream": {
          "scope": "ZohoConnect.streams.CREATE",
          "method": "POST",
          "url": "https://connect.zoho.com/api/v1/{network_id}/streams",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "message": "Company announcement: We are launching our new product next week!",
            "attachments": []
          }
        },
        "Get Events": {
          "scope": "ZohoConnect.events.READ",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/{network_id}/events",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Groups (ALL)": {
          "scope": "ZohoConnect.groups.ALL",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/{network_id}/groups",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Streams (ALL)": {
          "scope": "ZohoConnect.streams.ALL",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/{network_id}/streams",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Tasks": {
          "scope": "ZohoConnect.tasks.ALL",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/{network_id}/tasks",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Events (ALL)": {
          "scope": "ZohoConnect.events.ALL",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/{network_id}/events",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Manuals": {
          "scope": "ZohoConnect.manuals.ALL",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/{network_id}/manuals",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Forums": {
          "scope": "ZohoConnect.forums.ALL",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/{network_id}/forums",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Users": {
          "scope": "ZohoConnect.users.READ",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/{network_id}/users",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Networks": {
          "scope": "ZohoConnect.networks.READ",
          "method": "GET",
          "url": "https://connect.zoho.com/api/v1/networks",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
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
        "Get Conversations": {
          "scope": "SalesIQ.conversations.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/{portal_name}/conversations",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Visitors": {
          "scope": "SalesIQ.visitors.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/{portal_name}/visitors",
          "params": {
            "status": "online"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Contacts": {
          "scope": "SalesIQ.contacts.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/{portal_name}/contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Agents": {
          "scope": "SalesIQ.agents.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/{portal_name}/operators",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Chat Reports": {
          "scope": "SalesIQ.reports.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/{portal_name}/reports/chats",
          "params": {
            "from": "2024-01-01",
            "to": "2024-01-31"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Bots": {
          "scope": "SalesIQ.bots.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/{portal_name}/bots",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Conversations (ALL)": {
          "scope": "SalesIQ.conversations.ALL",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/{portal_name}/conversations",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Visitors (ALL)": {
          "scope": "SalesIQ.visitors.ALL",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/{portal_name}/visitors",
          "params": {
            "status": "online"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Contacts (ALL)": {
          "scope": "SalesIQ.contacts.ALL",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/{portal_name}/contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Bots (ALL)": {
          "scope": "SalesIQ.bots.ALL",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/{portal_name}/bots",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Departments": {
          "scope": "SalesIQ.departments.READ",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/{portal_name}/departments",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Articles": {
          "scope": "SalesIQ.articles.ALL",
          "method": "GET",
          "url": "https://salesiq.zoho.com/api/v2/{portal_name}/articles",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
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
        "Get Contacts": {
          "scope": "ZohoBigin.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/Contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Contact": {
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
                "Phone": "1234567890"
              }
            ]
          }
        },
        "Get Pipelines": {
          "scope": "ZohoBigin.pipelines.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/settings/pipelines",
          "params": {
            "module": "Pipelines"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Deals": {
          "scope": "ZohoBigin.modules.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/Pipelines",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Deal": {
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
                "Pipeline_Name": "New Deal",
                "Stage": "Qualification",
                "Amount": 5000,
                "Closing_Date": "2024-12-31",
                "Contact_Name": {
                  "id": "{contact_id}"
                }
              }
            ]
          }
        },
        "Get All Records (ALL)": {
          "scope": "ZohoBigin.modules.ALL",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/Contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Update Record": {
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
        "Delete Record": {
          "scope": "ZohoBigin.modules.DELETE",
          "method": "DELETE",
          "url": "https://www.zohoapis.com/bigin/v1/Contacts/{record_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Settings": {
          "scope": "ZohoBigin.settings.ALL",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/settings/modules",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Users": {
          "scope": "ZohoBigin.users.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/users",
          "params": {
            "type": "AllUsers"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Organization": {
          "scope": "ZohoBigin.org.READ",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/org",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Pipelines (ALL)": {
          "scope": "ZohoBigin.pipelines.ALL",
          "method": "GET",
          "url": "https://www.zohoapis.com/bigin/v1/settings/pipelines",
          "params": {
            "module": "Pipelines"
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
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
          "scope": "ZohoFSM.workorders.READ",
          "method": "GET",
          "url": "https://fsm.zoho.com/api/v1/workorders",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Work Order": {
          "scope": "ZohoFSM.workorders.CREATE",
          "method": "POST",
          "url": "https://fsm.zoho.com/api/v1/workorders",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "subject": "HVAC Maintenance",
            "description": "Annual HVAC system maintenance",
            "status": "New",
            "priority": "Medium",
            "contact_id": "{contact_id}",
            "scheduled_date": "2024-02-15"
          }
        },
        "Get Service Requests": {
          "scope": "ZohoFSM.servicerequests.READ",
          "method": "GET",
          "url": "https://fsm.zoho.com/api/v1/servicerequests",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Assets": {
          "scope": "ZohoFSM.assets.READ",
          "method": "GET",
          "url": "https://fsm.zoho.com/api/v1/assets",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Assign Technician": {
          "scope": "ZohoFSM.workorders.UPDATE",
          "method": "PATCH",
          "url": "https://fsm.zoho.com/api/v1/workorders/{workorder_id}",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "technician_id": "{agent_id}",
            "status": "Assigned",
            "scheduled_date": "2024-02-15",
            "scheduled_time": "10:00"
          }
        },
        "Get All Work Orders (ALL)": {
          "scope": "ZohoFSM.workorders.ALL",
          "method": "GET",
          "url": "https://fsm.zoho.com/api/v1/workorders",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Service Requests (ALL)": {
          "scope": "ZohoFSM.servicerequests.ALL",
          "method": "GET",
          "url": "https://fsm.zoho.com/api/v1/servicerequests",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Assets (ALL)": {
          "scope": "ZohoFSM.assets.ALL",
          "method": "GET",
          "url": "https://fsm.zoho.com/api/v1/assets",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get FSM Contacts": {
          "scope": "ZohoFSM.contacts.ALL",
          "method": "GET",
          "url": "https://fsm.zoho.com/api/v1/contacts",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get FSM Agents": {
          "scope": "ZohoFSM.agents.READ",
          "method": "GET",
          "url": "https://fsm.zoho.com/api/v1/serviceteams",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get FSM Reports": {
          "scope": "ZohoFSM.reports.READ",
          "method": "GET",
          "url": "https://fsm.zoho.com/api/v1/reports",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get FSM Settings": {
          "scope": "ZohoFSM.settings.READ",
          "method": "GET",
          "url": "https://fsm.zoho.com/api/v1/settings",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        }
      }
    },
    "oauth": {
      "scopes": [
        "N/A"
      ],
      "baseUrl": "https://accounts.zoho.com/oauth/v2",
      "endpoints": {
        "Authorization URL": {
          "scope": "N/A",
          "method": "GET",
          "url": "https://accounts.zoho.com/oauth/v2/auth",
          "params": {
            "response_type": "code",
            "client_id": "{your_client_id}",
            "scope": "ZohoCRM.modules.ALL",
            "redirect_uri": "https://your-app.com/callback",
            "access_type": "offline",
            "prompt": "consent"
          },
          "headers": {},
          "body": null
        },
        "Exchange Code for Token": {
          "scope": "N/A",
          "method": "POST",
          "url": "https://accounts.zoho.com/oauth/v2/token",
          "params": {},
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": {
            "code": "{authorization_code}",
            "client_id": "{your_client_id}",
            "client_secret": "{your_client_secret}",
            "redirect_uri": "https://your-app.com/callback",
            "grant_type": "authorization_code"
          }
        },
        "Refresh Access Token": {
          "scope": "N/A",
          "method": "POST",
          "url": "https://accounts.zoho.com/oauth/v2/token",
          "params": {},
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": {
            "refresh_token": "{your_refresh_token}",
            "client_id": "{your_client_id}",
            "client_secret": "{your_client_secret}",
            "grant_type": "refresh_token"
          }
        },
        "Client Credentials (Server-to-Server)": {
          "scope": "N/A",
          "method": "POST",
          "url": "https://accounts.zoho.com/oauth/v2/token",
          "params": {},
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": {
            "client_id": "{your_client_id}",
            "client_secret": "{your_client_secret}",
            "grant_type": "client_credentials",
            "scope": "ZohoCRM.modules.ALL"
          }
        },
        "Revoke Token": {
          "scope": "N/A",
          "method": "POST",
          "url": "https://accounts.zoho.com/oauth/v2/token/revoke",
          "params": {},
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": {
            "token": "{access_or_refresh_token}"
          }
        },
        "Token Info": {
          "scope": "N/A",
          "method": "GET",
          "url": "https://accounts.zoho.com/oauth/v2/tokeninfo",
          "params": {
            "access_token": "{access_token}"
          },
          "headers": {},
          "body": null
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
        "Get Events": {
          "scope": "ZohoBackstage.events.READ",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/portal/{portal_id}/events",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Create Event": {
          "scope": "ZohoBackstage.events.CREATE",
          "method": "POST",
          "url": "https://backstage.zoho.com/api/v1/portal/{portal_id}/events",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": {
            "title": "TechConf 2024",
            "description": "Annual technology conference",
            "startdate": "2024-06-15T09:00:00Z",
            "enddate": "2024-06-17T18:00:00Z",
            "venue": "San Francisco Convention Center",
            "event_type": "inperson"
          }
        },
        "Get Attendees": {
          "scope": "ZohoBackstage.attendees.READ",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/portal/{portal_id}/events/{event_id}/attendees",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Speakers": {
          "scope": "ZohoBackstage.speakers.READ",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/portal/{portal_id}/events/{event_id}/speakers",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Tickets": {
          "scope": "ZohoBackstage.tickets.READ",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/portal/{portal_id}/events/{event_id}/tickets",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Events (ALL)": {
          "scope": "ZohoBackstage.events.ALL",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/portal/{portal_id}/events",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Attendees (ALL)": {
          "scope": "ZohoBackstage.attendees.ALL",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/portal/{portal_id}/events/{event_id}/attendees",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Speakers (ALL)": {
          "scope": "ZohoBackstage.speakers.ALL",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/portal/{portal_id}/events/{event_id}/speakers",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get All Tickets (ALL)": {
          "scope": "ZohoBackstage.tickets.ALL",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/portal/{portal_id}/events/{event_id}/tickets",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        },
        "Get Backstage Reports": {
          "scope": "ZohoBackstage.reports.READ",
          "method": "GET",
          "url": "https://backstage.zoho.com/api/v1/portal/{portal_id}/events/{event_id}/reports",
          "params": {},
          "headers": {
            "Content-Type": "application/json"
          },
          "body": null
        }
      }
    }
  }
};