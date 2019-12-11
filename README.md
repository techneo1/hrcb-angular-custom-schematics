# Angular code generator for HRCB

HRCB Angular code generation tool for better productivity, folder structure and code consistency

### Installation

1. Install `schematics-cli` globally.

```
$ npm install -g @angular-devkit/schematics-cli
```

2. Install `@hrcb/schematics-angular` as a dev dependency.

```
$ npm install --save-dev @hrcb/schematics-angular

```

### Creating an angular feature in HRCB

Follow below command for creating a feature named "Expense policy" under the folder "src/app/feeditems":

```
cd "Path to Angular project"
$ng g @hrcb/schematics-angular:feature  --path="src/app/settings" --name="expense policy"
```

You should see the following files to be created when running this schematic:
This would create a feature module which includes a module, a routing module, a service, an adapter and components to list, add, edit, delete and view with predefined HRCB architecture template.

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

Configure this module for lazy loading in parent routing module

`system-settings-routing.module.ts`

```
const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "expensepolicies",
                canActivate: [AuthGuard],
                data: { roles: [PermissionTypes.MANAGE_SETTINGS, PermissionTypes.VIEW_SETTINGS] },
                loadChildren: () => import("./expense-policy/expense-policy.module").then((m) => m.ExpensePolicyModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemSettingsRoutingModule {}
```
