interface IEmailSender{
    SendSingleEmail(subject: string, body: string, receiver : string) : void;
}

interface ICampaignEmailSender extends IEmailSender {
    SendMutipleEmail(subject: string, body: string, receivers : string, campaignId: number) : void;
}

interface IScheduledEmailSender extends ICampaignEmailSender {
    SendScheduledEmail(subject: string, body: string, receivers : string, campaignId: number, sendTime: Date) : void;
}

interface ITrackableEmailSender {
    PrepareBodyForTracking(body: string, campaignId: number) : string;
    TrackEmailOpen(email: string, openTime: Date, campaignId: number) : void;
    GetTotalOpen(campaignId: number): number;
}

class EmailCampaign implements IScheduledEmailSender, ITrackableEmailSender {
    PrepareBodyForTracking(body: string, campaignId: number): string {
        throw new Error("Method not implemented.");
    }
    TrackEmailOpen(email: string, openTime: Date, campaignId: number): void {
        throw new Error("Method not implemented.");
    }
    GetTotalOpen(campaignId: number): number {
        throw new Error("Method not implemented.");
    }
    SendScheduledEmail(subject: string, body: string, receivers: string, campaignId: number, sendTime: Date): void {
        throw new Error("Method not implemented.");
    }
    SendMutipleEmail(subject: string, body: string, receivers: string, campaignId: number): void {
        throw new Error("Method not implemented.");
    }
    SendSingleEmail(subject: string, body: string, receiver: string): void {
        throw new Error("Method not implemented.");
    }  
}

class AccountEmailServiceService implements IEmailSender
{
    public SendSingleEmail(subject: string, body: string, receiver: string): void {
        throw new Error("Method not implemented.");
    }
    
}


class RegistrationService{
    private _emailSender: IEmailSender;

    public constructor(emailSender: IEmailSender){
        this._emailSender = emailSender;
    }

    public CreateAccount(username: string, email: string, password: string){
        // Code to create account

        this._emailSender.SendSingleEmail("Welcome", "Your account is ready", email);
    }
}

interface ILogDestination {
    Write(text : string) : void;
}

class LogService {
    private _destination : ILogDestination;

    public constructor(destination : ILogDestination){
        this._destination = destination;
    }

    public WriteLog(message: string) : void {
        // code to format the message
        var formattedMessage = "bla bla" + message; // formated message
        this._destination.Write(formattedMessage);
    }
}

class FileSystemDestination implements ILogDestination  {
    private _fileLocation : string;

    public constructor(location : string){
        this._fileLocation = location;
    }

    private OpenFile() : void {}
    private CloseFile() : void {}
    
    Write(text: string): void {
        this.OpenFile();
        // code to write in fle
        this.CloseFile();
    }
}

class EmailLogDestination implements ILogDestination
{
    private _username: string;
    private _password: string;
    private _receiver: string;
    private _smtpConnection;

    public constructor(smtpUsername: string, smtpPassword: string, receiverEmail: string){
        this._username = smtpUsername;
        this._password = smtpPassword;
        this._receiver = receiverEmail;
        this._smtpConnection = null; // new SMTP(_username, _password);
    }
    Write(text: string): void {
        this._smtpConnection.SendSingleEmail("Error", text, this._receiver);
    } 
}

var logger = new LogService(new FileSystemDestination("C://log.txt"));
logger.WriteLog("There is an error");

var logger2 = new LogService(new EmailLogDestination("jalaluddin", 
    "1234", "jalal.uddin@selise.ch"));
logger2.WriteLog("This is another error");
