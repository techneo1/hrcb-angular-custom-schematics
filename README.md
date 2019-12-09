# hrcb feature generator - Custom Angular Schematics for increased productivity

### Creating Features

Follow the below command to create a feature named "Expense policy", which is a feature module including module, routing module, service, and components to list, add, edit, delete and view under the folder "src/app/feeditems".

```
cd "Path to Angular project"
$ schematics @schematics/hrcb-feature-generator:hrcb-feature-generator --path="src/app/feeditems" --name="expense policy"
```

You should see the following files to be created when running this schematic:

```

CREATE /src/app/feeditems/expense-policy/expense-policy-routing.module.ts (635 bytes)
CREATE /src/app/feeditems/expense-policy/expense-policy.model.ts (0 bytes)
CREATE /src/app/feeditems/expense-policy/expense-policy.module.ts (1489 bytes)
CREATE /src/app/feeditems/expense-policy/expense-policy.service.spec.ts (1060 bytes)
CREATE /src/app/feeditems/expense-policy/expense-policy.service.ts (1737 bytes)
CREATE /src/app/feeditems/expense-policy/add-expense-policy/add-expense-policy.component.html (0 bytes)
CREATE /src/app/feeditems/expense-policy/add-expense-policy/add-expense-policy.component.spec.ts (1373 bytes)
CREATE /src/app/feeditems/expense-policy/add-expense-policy/add-expense-policy.component.ts (3314 bytes)
CREATE /src/app/feeditems/expense-policy/delete-expense-policy/delete-expense-policy.component.html (0 bytes)
CREATE /src/app/feeditems/expense-policy/delete-expense-policy/delete-expense-policy.component.spec.ts (1541 bytes)
CREATE /src/app/feeditems/expense-policy/delete-expense-policy/delete-expense-policy.component.ts (3085 bytes)
CREATE /src/app/feeditems/expense-policy/edit-expense-policy/edit-expense-policy.component.html (0 bytes)
CREATE /src/app/feeditems/expense-policy/edit-expense-policy/edit-expense-policy.component.spec.ts (1256 bytes)
CREATE /src/app/feeditems/expense-policy/edit-expense-policy/edit-expense-policy.component.ts (3829 bytes)
CREATE /src/app/feeditems/expense-policy/view-expense-policy/view-expense-policy.component.html (0 bytes)
CREATE /src/app/feeditems/expense-policy/view-expense-policy/view-expense-policy.component.spec.ts (2010 bytes)
CREATE /src/app/feeditems/expense-policy/view-expense-policy/view-expense-policy.component.ts (3782 bytes)
CREATE /src/app/feeditems/expense-policy/expense-policy-list/expense-policy-list.component.html (981 bytes)
CREATE /src/app/feeditems/expense-policy/expense-policy-list/expense-policy-list.component.spec.ts (2950 bytes)
CREATE /src/app/feeditems/expense-policy/expense-policy-list/expense-policy-list.component.ts (2037 bytes)
```
