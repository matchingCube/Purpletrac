export default [
    {
        title: "Company",
        route: "company",
        icon: "BriefcaseIcon",
    },
    {
        title: "Users",
        route: "users",
        icon: "UsersIcon",
    },
    {
        title: "My Tasks",
        route: "my-tasks",
        icon: "ListIcon",
    },
    {
        title: "GF Statements",
        route: "gf-statements",
        icon: "FileTextIcon",
    },
    {
        title: "Fleet Information",
        icon: "TruckIcon",
        children: [
            {
                title: "Fleet",
                route: "fleet",
                icon: "CircleIcon",
            },
            {
                title: "MMR",
                route: "mmr",
                icon: "CircleIcon",
            },
        ],
    },
    {
        title: "Drivers",
        icon: "UserIcon",
        children: [
            {
                title: "Manage Drivers",
                route: "manage-drivers",
                icon: "UserCheckIcon",
            },
            {
                title: "Import Scorecards",
                route: "import-scorecards",
                icon: "UploadIcon",
            },
            {
                title: "View Scorecards",
                route: "view-scorecards",
                icon: "EyeIcon",
            },
        ],
    },
    {
        title: "Weekly Schedule",
        icon: "CalendarIcon",
        children: [
            {
                title: "Upload Schedule",
                route: "upload-schedule",
                icon: "UploadIcon",
            },
            {
                title: "View Schedule",
                route: "view-schedule",
                icon: "EyeIcon",
            },
        ],
    },
    {
        title: "Payroll",
        icon: "DollarSignIcon",
        children: [
            {
                title: "Rate Setting",
                route: "rate-setting",
                icon: "CircleIcon",
            },
            {
                title: "Payroll Setting",
                route: "payroll-setting",
                icon: "CircleIcon",
            },
            {
                title: "Driver Earnings",
                route: "driver-earnings",
                icon: "CircleIcon",
            },
            {
                title: "Company Payroll",
                route: "company-payroll",
                icon: "CircleIcon",
            },
        ],
    },
    {
        title: "Utilities",
        icon: "CommandIcon",
        children: [
            {
                title: "Favorite Websites",
                route: "favorite-websites",
                icon: "StarIcon",
            },
            {
                title: "Download Data",
                route: "download-data",
                icon: "DownloadIcon",
            },
        ],
    },
    {
        title: "KPIs",
        icon: "ActivityIcon",
        children: [
            {
                title: "Revenue",
                icon: "DollarSignIcon",
                children: [
                    {
                        title: "Revenue Per Week",
                        route: "revenue-per-week",
                    },
                ],
            },
            {
                title: "Miles",
                icon: "BarChart2Icon",
                children: [
                    {
                        title: "Miles Per Week (Total)",
                        route: "miles-total",
                    },
                    {
                        title: "Miles Per Week (Driver)",
                        route: "miles-driver",
                    },
                    {
                        title: "Miles Per Week (Vehicle)",
                        route: "miles-vehicle",
                    },
                ],
            },
            {
                title: "MPG",
                icon: "TrendingUpIcon",
                children: [
                    {
                        title: "MPG Per Week (Vehicle)",
                        route: "mpg-per-week",
                    },
                ],
            },
            {
                title: "Fuel Cost",
                icon: "ZapIcon",
                children: [
                    {
                        title: "Cost Per Week (Total)",
                        route: "cost-total",
                    },
                    {
                        title: "Cost Per Week (Vehicle)",
                        route: "cost-vehicle",
                    },
                ],
            },
        ],
    },
];
