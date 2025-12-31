# MongoDB Installation Guide for Windows

## Quick Install Steps

### Method 1: Direct Download (Easiest)

1. **Download MongoDB:**
   - Go to: https://www.mongodb.com/try/download/community
   - Select:
     - Version: Current (7.0 or latest)
     - Platform: Windows
     - Package: MSI
   - Click "Download"

2. **Install:**
   - Run the downloaded .msi file
   - Choose "Complete" installation
   - ✅ Check "Install MongoDB as a Service" (IMPORTANT!)
   - ✅ Check "Install MongoDB Compass" (optional GUI tool)
   - Click "Install"

3. **Verify Installation:**
   Open Command Prompt and run:
   ```cmd
   mongosh --version
   ```

   If you see a version number, MongoDB is installed!

### Method 2: Using Chocolatey Package Manager

If you have Chocolatey installed:

```cmd
choco install mongodb
```

Then start the service:
```cmd
net start MongoDB
```

## Troubleshooting

**If MongoDB doesn't start automatically:**

```cmd
# Start MongoDB service
net start MongoDB

# Check if it's running
sc query MongoDB
```

**If mongosh command not found:**

Add to PATH: `C:\Program Files\MongoDB\Server\7.0\bin`

1. Search "Environment Variables" in Windows
2. Edit "Path" under System Variables
3. Add: `C:\Program Files\MongoDB\Server\7.0\bin`
4. Click OK and restart terminal

## Test Connection

After installation, test the connection:

```cmd
mongosh
```

You should see:
```
Current Mongosh Log ID: ...
Connecting to: mongodb://127.0.0.1:27017
Using MongoDB: 7.0.x
```

Type `exit` to close mongosh.

## Next Steps

Once MongoDB is installed and running, return to the main terminal and we'll set up the backend server.
