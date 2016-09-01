greasemonkey-scripts
====================

Greasemonkey scripts I use for Firefox and Chrome.

Note: Chrome doesn't support @require hence I chose so far to use straight js even though there is ways around it.


# Chrome Policy

Chrome has begun blocking all extensions that are not installed via the app store:
- http://blog.chromium.org/2015/05/continuing-to-protect-chrome-users-from.html


There is some work arounds:
- http://superuser.com/questions/767286/re-enable-extensions-not-coming-from-chrome-web-store-on-chrome-v35-with-enhan/768154#768154
- https://support.google.com/chrome/a/answer/188453


What worked for me was setting a whitelist policy:
- https://www.chromium.org/administrators/policy-templates
- https://www.chromium.org/administrators/policy-list-3#ExtensionInstallWhitelist
- chrome://policy

Example policy file on OSX:
```
$ cat /Library/Managed\ Preferences/$USER/com.google.Chrome.plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
       	<key>ExtensionInstallWhitelist</key>
       	<array>
       		<string>gefldlgdhhcnafgmkibingppkhmbofgg</string>
       	</array>
</dict>
</plist>
```
