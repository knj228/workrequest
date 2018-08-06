$(document).ready(function () {
  $("#servtype").change(function () {
        var val = $(this).val();
        if (val == "Cable/TV") {
            $("#cat").html("<option value='Audio'>Audio</option><option value='BluRay'>Blu-Ray</option><option value='Cable'>Cable</option><option value='Network Connectivity'>Network Connectivity</option><option value='Wifi Connectivity'>Wifi Connectivity</option>");
        }
        else if (val == "Cell Phone") {
            $("#cat").html("<option value='Global Plan'>Global Plan</option><option value='Lost'>Lost</option><option value='New Phone'>New Phone</option><option value='Upgrade/Repair/Service Change'>Upgrade/Repair/Service Change</option>");
        }
        else if (val == "Computer Setup") {
            $("#cat").html("<option value='Laptop'>Laptop</option>");
        }
        else if (val == "Email") {
            $("#cat").html("<option value='Alias'>Alias</option>");
        }
        else if (val == "Employee") {
                  $("#cat").html("<option value='Apartment'>Apartment</option><option value='Cancellation'>Cancellation</option><option value='Login'>Login</option><option value='Misspelled The Name'>Misspelled The Name</option><option value='New Account'>New Account</option><option value='New/Relocation/Cancellation'>New/Relocation/Cancellation</option><option value='Relocation'>Relocation</option>");
        }
        else if (val == "Faculty") {
            $("#cat").html("<option value='Data Connectivity'>Data Connectivity</option><option value='SmartTV Connectivity'>SmartTV Connectivity</option><option value='Telephone Install/Repair/Move'>Telephone Install/Repair/Move</option>");
        }
        else if (val == "Fax Line") {
            $("#cat").html("<option value='Not Recieving Fax'>Not Recieving Fax</option><option value='Repair'>Repair</option><option value='Setup'>Setup</option>");
        }
        else if (val == "Filing") {
            $("#cat").html("<option value='na'>N/A</option>");
        }
        else if (val == "Internet") {
            $("#cat").html("<option value='Browser'>Browser</option><option value='CSS'>CSS</option><option value='HTML'>HTML</option><option value='Update Images'>Update Images</option>");
        }
        else if (val == "iPad") {
            $("#cat").html("<option value='Charger Replacement'>Charger Replacement</option>");
        }
        else if (val == "Long Distance Code") {
            $("#cat").html("<option value='Card Replacement'>Card Replacement</option><option value='New Activation'>New Activation</option><option value='Re-activation'>Re-activation</option>");
        }
        else if (val == "Multimedia") {
            $("#cat").html("<option value='Audio'>Audio</option><option value='Palladium MPR'>Palladium MPR</option><option value='Upgrades'>Upgrades</option><option value='Video Conference'>Video Conference</option>");
        }
        else if (val == "Network Connectivity") {
            $("#cat").html("<option value='Active Directory'>Active Directory</option><option value='Apartment Connectivity'>Apartment Connectivity</option><option value='Data Jack Activation'>Data Jack Activation</option><option value='Data Jack Install/Activation'>Data Jack Install/Activation</option><option value='Data Jack Installation'>Data Jack Installation</option><option value='Data Jack Repair'>Data Jack Repair</option><option value='Folder'>Folder</option><option value='Network/Wireless Access'>Network/Wireless Access</option> <option value='PC Registration'>PC Registration</option> <option value='Printer'>Printer</option><option value='Registration'>Registration</option> <option value='Server'>Server</option><option value='Trackit Access'>Track-It Access</option><option value='User Setup'>User Setup</option>");
        }
        else if (val == "Office") {
            $("#cat").html("<option value='Office Closure'>Office Closure</option><option value='Relocation'>Relocation</option><option value='Rennovation'>Rennovation</option><option value='Setup'>Setup</option>");
        }
        else if (val == "Others") {
            $("#cat").html("<option value='AppleTV'>AppleTV</option>");
        }
        else if (val == "PC Upgrade/Install/Repair") {
            $("#cat").html("<option value='Aministrator Access'>Aministrator Access</option><option value='Blue Screen'>Blue Screen</option><option value='Computer Running Slow'>Computer Running Slow</option><option value='Computer Setup'>Computer Setup</option><option value='Connections'>Connections</option><option value='Crashes'>Crashes</option><option value='Hard Drive'>Hard Drive</option><option value='Hardware Removal'>Hardware Removal</option><option value='Internet'>Internet</option> <option value='Keyboard'>Keyboard</option><option value='Keychain issues'>Keychain issues</option> <option value='Login'>Login</option><option value='Monitor'>Monitor</option><option value='New Laptop'>New Laptop</option><option value='Power Issue'>Power Issue</option><option value='Repairs'>Repairs</option><option value='Software Install'>Software Install</option><option value='Upgrades'>Upgrades</option><option value='Virus'>Virus</option><option value='Wiping PC/MAC'>Wiping PC/MAC </option>");
        }
       else if (val == "Peripheral") {
            $("#cat").html("<option value='Mac USB NIC'>Mac USB NIC</option><option value='Mouse'>Mouse</option><option value='Projector/Screen'>Projector/Screen</option><option value='USB Card Swipe'>USB Card Swipe</option><option value='Web Camera'>Web Camera</option>");
        }
        else if (val == "Pitney Bowes") {
             $("#cat").html("<option value='Add Mail Recipient'>Add Mail Recipient</option><option value='Freezes'>Freezes</option><option value='Keyboard'>Keyboard</option><option value='Missing Information'>Missing Information</option><option value='Printer'>Printer</option><option value='Reports'>Reports</option><option value='Scanner'>Scanner</option><option value='Signature Pad'>Signature Pad</option><option value='Workstation'>Workstation</option>");
         }
         else if (val == "Presentation Setup") {
             $("#cat").html("<option value='Projector/PC/Projector Screen'>Projector/PC/Projector Screen</option>");
         }
         else if (val == "Scanner/Copier/Printer") {
              $("#cat").html("<option value='Fax Issues'>Fax Issues</option><option value='Installation'>Installation</option><option value='Network Connectivity'>Network Connectivity</option><option value='Paper Jam'>Paper Jam</option><option value='Printing'>Printing</option><option value='Relocation'>Relocation</option><option value='Scanner'>Scanner</option><option value='Service'>Service</option><option value='Stapling'>Stapling</option>");
          }
          else if (val == "Security") {
              $("#cat").html("<option value='User Account/PC Compromised'>User Account/PC Compromised</option>");
          }
          else if (val == "Server") {
              $("#cat").html("<option value='Connectivity'>Connectivity</option><option value='Folder Access'>Folder Access</option><option value='Upgrade'>Upgrade</option>");
          }
          else if (val == "Software") {
              $("#cat").html("<option value='Adobe Creative Suite'>Adobe Creative Suite</option><option value='Browser Issues'>Browser Issues</option><option value='Citrix Taking Time'>Upgrade</option><option value='Data Restore/Deletion'>Data Restore/Deletion</option><option value='Email Issues'>Email Issues</option><option value='Installation'>Installation</option><option value='Microsoft Excel'>Microsoft Excel</option><option value='Repair'>Repair</option><option value='Updates'>Updates</option><option value='Updates'>Updates</option><option value='Upgrades'>Upgrades</option>");
          }
          else if (val == "StarRez") {
              $("#cat").html("<option value='Citrix Access'>Citrix Access</option><option value='Data Access'>Data Access</option><option value='Installation Issues'>Installation Issues</option><option value='Setup'>Setup</option><option value='Update Issues'>Update Issues</option>");
          }
          else if (val == "Telephone") {
              $("#cat").html("<option value='Bridge'>Bridge</option><option value='Broken'>Broken</option><option value='Call Center Activity'>Call Center Activity</option><option value='Connectivity Issue'>Connectivity Issue</option><option value='Display'>Display</option><option value='EC500'>EC500</option><option value='Handset'>Handset</option><option value='Headset'>Headset</option><option value='Install'>Install</option><option value='New Phone'>New Phone</option><option value='Phone Switch'>Phone Switch</option><option value='Upgrade'>Upgrade</option><option value='VM Reset'>VM Reset</option><option value='VM Setup'>VM Setup</option>");
          }
    });
  });
