import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="container-custom text-center">
          <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-primary/10 flex items-center justify-center">
            <span className="text-5xl font-display font-bold text-primary">404</span>
          </div>
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
          <Button asChild variant="hero">
            <Link to="/"><Home className="w-5 h-5" />Back to Home</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
