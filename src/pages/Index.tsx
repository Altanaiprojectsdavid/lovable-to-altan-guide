import { StepCard } from "@/components/StepCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Download, Settings, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-16 pb-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Export from Lovable to Altan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Follow these simple steps to seamlessly transfer your Lovable project to Altan for further development and deployment.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-8">
          <StepCard
            step={1}
            title="Access Project Settings"
            description="Navigate to your Lovable project and click on the project name in the top-left corner, then select 'Settings' from the dropdown menu."
          />

          <StepCard
            step={2}
            title="Connect to GitHub"
            description="In the project settings, look for the GitHub integration option. Click 'Connect to GitHub' and authorize Lovable to access your GitHub account."
          />

          <StepCard
            step={3}
            title="Create Repository"
            description="Choose to create a new repository or select an existing one. Lovable will automatically push your project's codebase to the selected GitHub repository."
          />

          <StepCard
            step={4}
            title="Download Project Files"
            description="Once connected to GitHub, you can also download your project as a ZIP file from the project settings for local development."
          >
            <div className="flex gap-3">
              <Button variant="secondary" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download ZIP
              </Button>
              <Button variant="secondary" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </div>
          </StepCard>

          <StepCard
            step={5}
            title="Import to Altan"
            description="Open Altan and create a new project. Use the 'Import from GitHub' option and select your newly created repository, or upload the downloaded project files."
          />

          <StepCard
            step={6}
            title="Configure Altan Settings"
            description="Set up your project configuration in Altan, including environment variables, build settings, and deployment preferences."
          >
            <div className="bg-muted/50 rounded-lg p-4 mt-3">
              <p className="text-sm text-muted-foreground">
                <strong>Tip:</strong> Make sure to review and update any API keys or environment variables that may be needed in your new Altan environment.
              </p>
            </div>
          </StepCard>

          {/* Additional Resources */}
          <Card className="p-8 bg-gradient-primary/5 border-primary/20 mt-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Need Help?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you encounter any issues during the export process, check out the documentation or contact support for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Lovable Documentation
                </Button>
                <Button variant="secondary">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Altan Documentation
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;